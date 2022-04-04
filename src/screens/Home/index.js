import {
  RefreshControl,
  ScrollView,
  View,
  BackHandler,
  Alert,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataBooks} from './redux/action';
import {
  Header,
  LoadingBar,
  NoConnection,
  Recommended,
  Search,
} from '../../components';
import Popular from '../../components/Popular';
import {setRefreshing} from '../../store/globalAction';

const Home = () => {
  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {data} = useSelector(state => state.home);
  const {refreshing, isLoading, connection} = useSelector(
    state => state.global,
  );

  const getDataBook = () => {
    dispatch(getDataBooks(dataToken));
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
    getDataBook();
    exit();
  }, []);

  const onRefresh = () => {
    dispatch(setRefreshing(true));
    getDataBook();
  };

  const popularBooks = data.slice(0, 20);

  const recommendedBooks = data
    .sort(function (a, b) {
      return b.average_rating - a.average_rating;
    })
    .slice(0, 6);

  const homeScreen = () => {
    return (
      <View>
        <Search />
        {LoadingBar(isLoading)}

        <Recommended data={recommendedBooks} />
        <Popular data={popularBooks} />
      </View>
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      <Header />
      {connection ? homeScreen() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Home;
