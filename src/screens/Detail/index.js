import {
  View,
  Share,
  ScrollView,
  TouchableOpacity,
  RefreshControl,
  Image,
} from 'react-native';
import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {getDataDetail} from './redux/action';
import {
  CircleButton,
  Courgette,
  LibreBaskerville,
  LoadingBar,
  NoConnection,
  Rating,
} from '../../components';
import styles from './style';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_300, LIGHT_BLUE_600, RED_500} from '../../helpers/colors';
import {setHeart, setRefreshing} from '../../store/globalAction';
import {numberToIDR} from '../../helpers/numberToIDR';
import {Notification} from '../../helpers/notification';

const Detail = ({route, navigation}) => {
  const {params} = route.params;
  const id_book = params.idBook;

  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {detail} = useSelector(state => state.detailBook);
  const {heart, idBook} = useSelector(state => state.global);

  const {refreshing, isLoading, connection} = useSelector(
    state => state.global,
  );

  const getDetail = () => {
    dispatch(getDataDetail(dataToken, id_book));
  };

  useEffect(() => {
    getDetail();
  }, []);

  const shareData = () => {
    Share.share({
      message: `Saya ingin merekomendasikan Anda Buku yang berjudul  '${
        detail.title
      }', buku tersebut merupakan karangan dari ${
        detail.author
      }, memiliki jumlah halaman ${
        detail.page_count
      } halaman. Buku ini memiliki harga yaitu sebesar ${numberToIDR(
        detail.price,
      )}. Ayo buruan beli! Stok buku yang tersedia berjumlah ${
        detail.stock_available
      } buku.`,
    });
  };

  const lovedBook = () => {
    Notification.configure();
    Notification.createChannel('1');

    if (heart && idBook) {
      dispatch(setHeart({heart: false, idBook: ''}));

      Notification.sendNotifictaion(
        '1',
        'Unloved Book!',
        `Kamu Batal menyukai Buku ${detail.title}!`,
      );
    } else {
      dispatch(setHeart({heart: true, idBook: id_book}));

      Notification.sendNotifictaion(
        '1',
        'Loved Book!',
        `Kamu menyukai Buku ${detail.title}!`,
      );
    }
  };

  const onRefresh = () => {
    dispatch(setRefreshing(true));
    getDetail();
  };

  const stock = detail.stock_available;
  const stockChecker = stock => (stock > 0 ? LIGHT_BLUE_600 : RED_500);

  const buttonBuy = stock => {
    if (stock > 0) {
      return (
        <View style={styles.containerButtonBuy}>
          <TouchableOpacity style={styles.buttonBuy}>
            <LibreBaskerville style={[styles.text, styles.textButtonBuy]}>
              Buy {numberToIDR(detail.price)}
            </LibreBaskerville>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View style={styles.containerButtonBuy}>
          <View
            style={[
              styles.buttonBuy,
              {
                backgroundColor: RED_500,
              },
            ]}>
            <LibreBaskerville style={[styles.text, styles.textButtonBuy]}>
              Out of Stock
            </LibreBaskerville>
          </View>
        </View>
      );
    }
  };

  const detailScreen = () => {
    return (
      <View>
        <View style={styles.containerAllBookInfo}>
          <View style={styles.containerImage}>
            <Image
              style={styles.coverImage}
              source={{uri: detail.cover_image}}
            />
          </View>
          <View style={styles.containerBookInfo}>
            <LibreBaskerville
              type="Bold"
              style={[styles.text, styles.textTitle]}>
              {detail.title}
            </LibreBaskerville>

            <LibreBaskerville style={[styles.text, styles.textAuthor]}>
              {detail.author}
            </LibreBaskerville>

            <LibreBaskerville style={[styles.text, styles.textPublisher]}>
              {detail.publisher}
            </LibreBaskerville>
            <View style={styles.containerRating}>
              <Rating rating={detail.average_rating} />
              <LibreBaskerville style={[styles.text, styles.textRating]}>
                {detail.average_rating}
              </LibreBaskerville>

              <LibreBaskerville
                style={[styles.text, styles.textSold, {color: LIGHT_BLUE_300}]}>
                |
              </LibreBaskerville>

              <LibreBaskerville style={[styles.text, styles.textSold]}>
                {detail.total_sale}
              </LibreBaskerville>
              <LibreBaskerville style={[styles.text, styles.textSold]}>
                Sold
              </LibreBaskerville>
            </View>
          </View>
        </View>

        <View style={styles.containerInfoAvailableBooks}>
          <View style={styles.containerPages}>
            <LibreBaskerville
              type="Bold"
              style={[styles.text, styles.textPages]}>
              {detail.page_count}
            </LibreBaskerville>
            <LibreBaskerville style={[styles.text, styles.title]}>
              Pages
            </LibreBaskerville>
          </View>
          <View style={styles.containerStocks}>
            <LibreBaskerville
              type="Bold"
              style={[
                styles.text,
                styles.textStocks,
                {
                  color: stockChecker(stock),
                },
              ]}>
              {stock}
            </LibreBaskerville>
            <LibreBaskerville style={[styles.text, styles.title]}>
              Stocks
            </LibreBaskerville>
          </View>
        </View>

        {buttonBuy(stock)}

        <View style={styles.containerOverview}>
          <LibreBaskerville style={[styles.text, styles.titleSynopsis]}>
            Synopsis
          </LibreBaskerville>
          <Courgette style={[styles.text, styles.textSynopsis]}>
            {detail.synopsis}
          </Courgette>
        </View>
      </View>
    );
  };

  return (
    <ScrollView
      refreshControl={
        <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
      }>
      <View style={styles.allButtons}>
        <View>
          <CircleButton
            nameIcon="arrow-left"
            onPress={() => navigation.goBack()}
          />
        </View>
        <View style={styles.miniButtons2}>
          <CircleButton
            color={RED_500}
            style={{marginEnd: moderateScale(10)}}
            nameIcon={heart && idBook === id_book ? 'heart' : 'heart-o'}
            onPress={lovedBook}
          />
          <CircleButton nameIcon="share" onPress={shareData} />
        </View>
      </View>

      {LoadingBar(isLoading)}
      {connection ? detailScreen() : NoConnection(connection)}
    </ScrollView>
  );
};

export default Detail;
