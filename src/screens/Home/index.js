import {
  RefreshControl,
  ScrollView,
  View,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setDataBooks} from './redux/action';
import axios from 'axios';
import {BASE_URL} from '@env';
import {
  Header,
  LoadingBar,
  NoConnection,
  Recommended,
  Search,
} from '../../components';
import Popular from '../../components/Popular';
import {setIsLoading, setRefreshing} from '../../store/globalAction';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {data} = useSelector(state => state.home);
  const {refreshing, isLoading, connection} = useSelector(
    state => state.global,
  );

  const [setHeart, heart] = useState(false);

  const getDataBooks = async () => {
    dispatch(setIsLoading(true));

    try {
      const res = await axios.get(`${BASE_URL}/books?limit=73`, {
        headers: {Authorization: `Bearer ${dataToken}`},
      });

      if (res.data.results.length > 0) {
        dispatch(setDataBooks(res.data.results));
        dispatch(setIsLoading(false));
        dispatch(setRefreshing(false));
      }

      console.log(res);
    } catch (error) {
      console.log(error);
      dispatch(setIsLoading(false));
      dispatch(setRefreshing(false));
    }
  };

  // tombol exit
  const exit = () => {
    const backAction = () => {
      Alert.alert('Hold on!', 'Do you want to exit the application?', [
        {
          text: 'Cancel',
          onPress: () => null,
          style: 'cancel',
        },
        {text: 'YES', onPress: () => BackHandler.exitApp()},
      ]);
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );

    return () => backHandler.remove();
  };

  useEffect(() => {
    getDataBooks();
    exit();
  }, []);

  const onRefresh = () => {
    dispatch(setRefreshing(true));
    getDataBooks();
  };

  const recommendedBooks = data
    .sort(function (a, b) {
      return b.average_rating - a.average_rating;
    })
    .slice(0, 6);

  const popularBooks = data.slice(0, 20);

  const homeScreen = () => {
    return (
      <View>
        <Search navigation={navigation} />
        <Recommended data={recommendedBooks} navigation={navigation} />
        {LoadingBar(isLoading)}

        <Popular data={popularBooks} navigation={navigation} />
        {LoadingBar(isLoading)}
      </View>
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      <Header />
      {LoadingBar(isLoading)}
      {connection || data ? homeScreen() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Home;
