import {View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  Header,
  Input,
  LibreBaskerville,
  LoadingBar,
  NoConnection,
  Popular,
} from '../../components';
import {navigate} from '../../helpers/navigate';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {LIGTH_BLUE_500} from '../../helpers/colors';
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

  console.log(search);

  const getDataSearch = async () => {
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

  const searchDataScreen = () => {
    return <Popular hideTitle={true} data1={dataSearch} />;
  };

  return (
    <View style={styles.page}>
      <Header button={true} nameIcon="home" onPressButton={goToHome} />
      <View style={styles.searchBar}>
        <Input
          style={styles.input}
          onChangeText={value => {
            setSearch(value);
          }}
          value={search}
        />
        <TouchableOpacity onPress={() => getDataSearch(search)}>
          <Ionicons
            style={styles.searchIcon}
            name="search"
            size={30}
            color={LIGTH_BLUE_500}
          />
        </TouchableOpacity>
      </View>
      {LoadingBar(isLoading)}

      {dataSearch.length === 0 && connection && !isLoading ? (
        <LibreBaskerville style={styles.noDataSearch}>No Data</LibreBaskerville>
      ) : null}
      {connection ? searchDataScreen() : NoConnection(connection)}
    </View>
  );
};

export default Search;
