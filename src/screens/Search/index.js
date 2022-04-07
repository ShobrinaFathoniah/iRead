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
import {LIGHT_BLUE_600, LIGTH_BLUE_500} from '../../helpers/colors';
import {useDispatch, useSelector} from 'react-redux';
import axios from 'axios';
import {BASE_URL} from '@env';
import {setIsLoading} from '../../store/globalAction';

const Search = () => {
  const [search, setSearch] = useState('');
  const [dataSearch, setDataSearch] = useState([]);

  const goToHome = () => navigate('Home');
  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {isLoading, connection} = useSelector(state => state.global);
  const {detail} = useSelector(state => state.detailBook);

  console.log(search);

  const getDataSearch = async search => {
    try {
      dispatch(setIsLoading(true));
      const res = await axios.get(`${BASE_URL}/books?title=${search}`, {
        headers: {Authorization: `Bearer ${dataToken}`},
      });

      console.log(res, 'res');
      console.log(res.data, 'res');
      console.log(`${BASE_URL}/books?title=${search}`);

      setDataSearch(res.data.results);

      dispatch(setIsLoading(false));
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
    }
  };

  const lastSeenBook = detail => {
    const idBook = detail.id;

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
            title={detail.title}
            urlImage={detail.cover_image}
            id_book={idBook}
            price={detail.price}
            publisher={detail.publisher}
            rating={detail.average_rating}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const searchDataScreen = () => {
    return (
      <View>
        <View style={styles.header}>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <LibreBaskerville style={styles.title}>Search</LibreBaskerville>
            <Ionicons name="search" size={30} color={LIGHT_BLUE_600} />
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
            color={LIGTH_BLUE_500}
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
