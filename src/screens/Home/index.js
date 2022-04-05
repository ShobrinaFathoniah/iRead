import {View, BackHandler, Alert} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataBooks} from './redux/action';
import {Header, LoadingBar, NoConnection, Search} from '../../components';
import Popular from '../../components/Popular';
import {setRefreshing} from '../../store/globalAction';
import {setToken} from '../Login/redux/action';
import {navigate} from '../../helpers/navigate';
import {moderateScale} from 'react-native-size-matters';
import AsyncStorage from '@react-native-async-storage/async-storage';

const Home = ({navigation}) => {
  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {data} = useSelector(state => state.home);
  const {refreshing, isLoading, connection} = useSelector(
    state => state.global,
  );

  const getDataBook = () => {
    dispatch(getDataBooks(dataToken));
  };

  console.log(data.length);

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

  const logout = async () => {
    await AsyncStorage.setItem('@token', '');
    Alert.alert('Hold on!', 'Do you want to logout?', [
      {
        text: 'Cancel',
        onPress: () => null,
        style: 'cancel',
      },
      {
        text: 'YES',
        onPress: () => {
          dispatch(setToken(''));
          navigate('Login');
        },
      },
    ]);
  };

  const goToSearch = () => navigation.navigate('Search');

  const popularBooks = data.slice(0, 20);

  const recommendedBooks = data
    .sort(function (a, b) {
      return b.average_rating - a.average_rating;
    })
    .slice(0, 6);

  const homeScreen = () => {
    return (
      <View>
        {/* <Search /> */}
        <Popular
          data1={popularBooks}
          data2={recommendedBooks}
          onRefresh={onRefresh}
          refreshing={refreshing}
        />
      </View>
    );
  };

  return (
    <View style={{flex: 1, marginBottom: moderateScale(90)}}>
      <Header
        button={true}
        nameIcon="logout"
        onPressButton={logout}
        search={true}
        onPressSearch={goToSearch}
      />
      {LoadingBar(isLoading)}
      {connection ? homeScreen() : NoConnection(connection)}
    </View>
  );
};

export default Home;
