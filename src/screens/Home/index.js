import {View, ScrollView} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setDataBooks} from './redux/action';
import axios from 'axios';
import {BASE_URL} from '@env';
import {Header, LibreBaskerville, Recommended} from '../../components';
import Popular from '../../components/Popular';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {data} = useSelector(state => state.home);

  const getDataBooks = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/books`, {
        headers: {Authorization: `Bearer ${dataToken}`},
      });

      if (res.data.results.length > 0) {
        dispatch(setDataBooks(res.data.results));
      }

      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };

  const goToDetail = () => {
    const idBook = data.id;

    navigation.navigate('Detail', {
      params: {idBook},
    });
  };

  useEffect(() => {
    getDataBooks();
  }, []);

  const recommendedBooks = data.sort(function (a, b) {
    return b.average_rating - a.average_rating;
  });

  return (
    <ScrollView>
      <Header />
      <Recommended data={recommendedBooks} onPress={goToDetail} />
      <Popular />
    </ScrollView>
  );
};

export default Home;
