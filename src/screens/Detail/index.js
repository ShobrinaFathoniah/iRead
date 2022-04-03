import {View, Share} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {setDetailData} from './redux/action';
import {CircleButton, LibreBaskerville} from '../../components';
import {CommonActions} from '@react-navigation/native';
import styles from './style';
import {moderateScale} from 'react-native-size-matters';
import axios from 'axios';
import {LIGHT_BLUE_600} from '../../helpers/colors';
import {BASE_URL} from '@env';

const Detail = ({route, navigation}) => {
  const {params} = route.params;
  const idBook = params.idBook;

  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {detailData} = useSelector(state => state.detail);

  // const [detailData, setDetailData] = useState({});

  const getDetail = async () => {
    try {
      const res = await axios.get(`${BASE_URL}/books/${idBook}`, {
        headers: {Authorization: `Bearer ${dataToken}`},
      });

      dispatch(setDetailData(res.data));
      // setDetailData(res.data);

      console.log(res, 'res');
    } catch (error) {
      console.log(error);
      // setRefreshing(false);
    }
  };

  useEffect(() => {
    getDetail();
  }, []);

  const shareData = () => {
    Share.share({
      message: `Saya ingin merekomendasikan Anda Buku dengan judul '${detailData.title}'`,
    });
  };

  const goBack = () => navigation.dispatch(CommonActions.goBack());

  return (
    <View>
      <View style={styles.allButtons}>
        <View>
          <CircleButton nameIcon="arrow-left" onPress={goBack()} />
        </View>
        <View style={styles.miniButtons2}>
          <CircleButton
            style={{marginEnd: moderateScale(5)}}
            nameIcon="heart-o"
            color={LIGHT_BLUE_600}
          />
          <CircleButton
            style={{marginEnd: moderateScale(18)}}
            color={LIGHT_BLUE_600}
            nameIcon="share"
            // onPress={shareData}
          />
        </View>
      </View>

      <LibreBaskerville>{detailData.title}</LibreBaskerville>
    </View>
  );
};

export default Detail;
