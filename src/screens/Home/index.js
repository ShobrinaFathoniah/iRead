import {RefreshControl, ScrollView} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setDataBooks} from './redux/action';
import axios from 'axios';
import {BASE_URL} from '@env';
import {Header, Recommended, Search} from '../../components';
import Popular from '../../components/Popular';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {data} = useSelector(state => state.home);
  const [refreshing, setRefreshing] = useState(false);
  const [setHeart, heart] = useState(false);

  const getDataBooks = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/books?limit=73`, {
        headers: {Authorization: `Bearer ${dataToken}`},
      });

      if (res.data.results.length > 0) {
        dispatch(setDataBooks(res.data.results));
        setRefreshing(false);
      }

      console.log(res);
    } catch (error) {
      console.log(error);
      setRefreshing(false);
    }
  };

  useEffect(() => {
    getDataBooks();
  }, []);

  const onRefresh = () => {
    setRefreshing(true);
    getDataBooks();
  };

  const recommendedBooks = data
    .sort(function (a, b) {
      return b.average_rating - a.average_rating;
    })
    .slice(0, 6);

  const popularBooks = data.slice(0, 20);

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      <Header />
      <Search navigation={navigation} />
      <Recommended data={recommendedBooks} navigation={navigation} />
      <Popular data={popularBooks} navigation={navigation} />
    </ScrollView>
  );
};

export default Home;
