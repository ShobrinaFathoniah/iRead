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
import {getDataDetail, setEbookSeen} from './redux/action';
import {
  CircleButton,
  LibreBaskerville,
  LoadingBar,
  NoConnection,
  Rating,
} from '../../components';
import styles from './style';
import {moderateScale} from 'react-native-size-matters';
import {
  DARK_PURPLE_300,
  DARK_PURPLE_300_trans,
  LIGHT_BLUE_600,
  PURPLE,
  RED_500,
} from '../../helpers/colors';
import {setHeart, setRefreshing} from '../../store/globalAction';
import {numberToIDR} from '../../helpers/numberToIDR';
import {Notification} from '../../helpers/notification';
import Pdf from 'react-native-pdf';

const Detail = ({route, navigation}) => {
  const {params} = route.params;
  const id_book = params.idBook;

  const dispatch = useDispatch();
  const {dataToken} = useSelector(state => state.login);
  const {detail, ebookSeen} = useSelector(state => state.detailBook);
  const {heart, idBook} = useSelector(state => state.global);
  const {refreshing, isLoading, connection} = useSelector(
    state => state.global,
  );

  useEffect(() => {
    const getDetail = () => {
      dispatch(getDataDetail(dataToken, id_book));
    };
    getDetail();
  }, [dataToken, id_book, dispatch]);

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
    dispatch(getDataDetail(dataToken, id_book));
  };

  const openPDF = seen => {
    if (seen) {
      return (
        <View style={styles.containerPdf}>
          <Pdf
            source={{
              uri: 'https://hpread.scholastic.com/HP_Book2_Chapter_Excerpt.pdf',
            }}
            style={styles.pdf}
          />
        </View>
      );
    } else {
      return null;
    }
  };

  const stock = detail.stock_available;
  const stockChecker = stocks => (stocks > 0 ? LIGHT_BLUE_600 : RED_500);

  const buttonBuy = stocks => {
    if (stocks > 0) {
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

  const buttonPdf = () => {
    if (detail.title === 'Harry Potter and the Chamber of Secrets') {
      return (
        <View style={styles.containerButtonBuy}>
          <TouchableOpacity
            style={[
              styles.buttonBuy,
              {
                backgroundColor: PURPLE,
              },
            ]}
            onPress={() =>
              ebookSeen
                ? dispatch(setEbookSeen(false))
                : dispatch(setEbookSeen(true))
            }>
            <LibreBaskerville style={[styles.text, styles.textButtonBuy]}>
              See e-Books
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
                backgroundColor: DARK_PURPLE_300,
              },
            ]}>
            <LibreBaskerville style={[styles.text, styles.textButtonBuy]}>
              No e-Book
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
                style={[
                  styles.text,
                  styles.textSold,
                  {color: DARK_PURPLE_300_trans},
                ]}>
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
        <View style={styles.containerAllButton}>
          {buttonPdf()}
          {buttonBuy(stock)}
        </View>
        <View style={styles.containerOverview}>
          <LibreBaskerville
            type="Bold"
            style={[styles.text, styles.titleSynopsis]}>
            Synopsis
          </LibreBaskerville>
          <View style={styles.synopsisContainer}>
            {/* rapihin */}
            <LibreBaskerville style={[styles.text, styles.textSynopsis]}>
              {detail.synopsis}
            </LibreBaskerville>
          </View>
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
            nameIcon="arrowleft"
            onPress={() =>
              ebookSeen ? dispatch(setEbookSeen(false)) : navigation.goBack()
            }
          />
        </View>
        <View style={styles.miniButtons2}>
          <CircleButton
            color={RED_500}
            style={{marginEnd: moderateScale(10)}}
            nameIcon={heart && idBook === id_book ? 'heart' : 'hearto'}
            onPress={lovedBook}
          />
          <CircleButton nameIcon="sharealt" onPress={shareData} />
        </View>
      </View>

      {LoadingBar(isLoading)}
      {connection
        ? ebookSeen
          ? openPDF(ebookSeen)
          : detailScreen()
        : NoConnection(connection)}
    </ScrollView>
  );
};

export default Detail;
