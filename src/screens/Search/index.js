import {View, ScrollView, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Button,
  Input,
  LibreBaskerville,
  NoConnection,
  Popular,
  PopularCard,
} from '../../components';
import {navigate} from '../../helpers/navigate';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {DARK_PURPLE_500} from '../../helpers/colors';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL} from '@env';
import {setIsLoading} from '../../store/globalAction';

const Search = () => {
  const [search, setSearch] = useState('');
  const [dataSearch, setDataSearch] = useState([]);

  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {isLoading, connection} = useSelector(state => state.global);
  const {detail} = useSelector(state => state.detailBook);

  console.log(search);

  const getDataSearch = async searchBook => {
    try {
      dispatch(setIsLoading(true));
      const res = await axios.get(`${BASE_URL}/books?title=${searchBook}`, {
        headers: {Authorization: `Bearer ${dataToken}`},
      });

      setDataSearch(res.data.results);

      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
    }
  };

  const lastSeenBook = detailBook => {
    const idBook = detailBook.id;

    return (
      <View style={styles.containerLastSeen}>
        <LibreBaskerville style={[styles.title]}>
          Your Last Seen
        </LibreBaskerville>
        <TouchableOpacity
          onPress={() => {
            navigate('Detail', {
              params: {idBook},
            });
          }}>
          <PopularCard
            title={detailBook.title}
            urlImage={detailBook.cover_image}
            id_book={idBook}
            price={detailBook.price}
            publisher={detailBook.publisher}
            rating={detailBook.average_rating}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const searchDataScreen = () => {
    return (
      <View>
        <View style={styles.header}>
          <View style={styles.containerTitle}>
            <LibreBaskerville style={styles.title}>Search</LibreBaskerville>
            <Ionicons name="search" size={30} color={DARK_PURPLE_500} />
          </View>
          <LibreBaskerville style={styles.text}>
            Search your Favorite Book in Here!
          </LibreBaskerville>
        </View>

        <View style={styles.searchBar}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={30}
            color={DARK_PURPLE_500}
          />
          <Input
            style={styles.input}
            onChangeText={value => {
              setSearch(value);
              getDataSearch(search);
            }}
            value={search}
            onSubmitEditing={() => getDataSearch(search)}
            placeholder="Write in Here"
          />
        </View>
        <View style={styles.containerRecommendedSearch}>
          <ScrollView
            showsHorizontalScrollIndicator={false}
            horizontal
            style={styles.recommendedSearch}>
            <Button
              text={'Harry Potter'}
              onPress={() => getDataSearch('Harry Potter')}
            />
            <Button
              text={'Anna Karenina'}
              onPress={() => getDataSearch('Anna Karenina')}
            />
            <Button text={'Comedy'} onPress={() => getDataSearch('Comedy')} />
            <Button text={'Paper'} onPress={() => getDataSearch('Paper')} />
          </ScrollView>
        </View>

        {dataSearch.length === 0 && search && connection && !isLoading ? (
          <View>
            <LibreBaskerville style={styles.noDataSearch}>
              No Data
            </LibreBaskerville>
          </View>
        ) : null}

        {detail && dataSearch.length === 0 && !search
          ? detail.id
            ? lastSeenBook(detail)
            : null
          : null}

        <Popular
          hideLoading={true}
          hideTitle={true}
          data1={dataSearch}
          headerShown={false}
        />
      </View>
    );
  };

  return (
    <View style={styles.page}>
      {connection ? searchDataScreen() : NoConnection(connection)}
    </View>
  );
};

export default Search;
