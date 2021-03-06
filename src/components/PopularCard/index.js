import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {
  DARK_PURPLE_500,
  RED_500,
  WHITE,
  YELLOW_200,
} from '../../helpers/colors';
import {LibreBaskerville} from '../Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {setHeart} from '../../store/globalAction';
import {numberToIDR} from '../../helpers/numberToIDR';
import {Notification} from '../../helpers/notification';

const PopularCard = ({urlImage, title, price, rating, publisher, id_book}) => {
  const dispatch = useDispatch();
  const {heart, idBook} = useSelector(state => state.global);
  const priceToIDR = numberToIDR(price);

  const loved = () => {
    Notification.configure();
    Notification.createChannel('1');

    if (heart && idBook) {
      dispatch(setHeart({heart: false, idBook: ''}));

      Notification.sendNotifictaion(
        '1',
        'Unloved Book!',
        `Kamu Batal menyukai Buku ${title}!`,
      );
    } else {
      dispatch(setHeart({heart: true, idBook: id_book}));

      Notification.sendNotifictaion(
        '1',
        'Loved Book!',
        `Kamu menyukai Buku ${title}!`,
      );
    }
  };

  return (
    <View style={styles.page}>
      <View>
        <View style={styles.containerImage}>
          <Image style={styles.image} source={{uri: urlImage}} />
        </View>
        <View style={{margin: moderateScale(7)}}>
          <LibreBaskerville
            numberOfLines={2}
            style={[styles.text, styles.textTitle]}>
            {title}
          </LibreBaskerville>
          <LibreBaskerville type="Bold" style={[styles.text, styles.textPrice]}>
            {priceToIDR}
          </LibreBaskerville>
          <LibreBaskerville style={[styles.text, styles.textPublisher]}>
            {publisher}
          </LibreBaskerville>
          <View style={styles.containerBookInfo}>
            <MaterialIcons name="star" size={17} color={YELLOW_200} />
            <LibreBaskerville style={[styles.text, styles.textRating]}>
              {rating}
            </LibreBaskerville>
            <TouchableOpacity onPress={loved}>
              <AntDesign
                style={styles.heart}
                name={heart && idBook === id_book ? 'heart' : 'hearto'}
                size={15}
                color={RED_500}
              />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PopularCard;

const styles = StyleSheet.create({
  page: {
    width: widthPercentageToDP(47),
    borderRadius: moderateScale(8),
    margin: moderateScale(5),
    borderColor: DARK_PURPLE_500,
    shadowColor: DARK_PURPLE_500,
    elevation: 10,
    backgroundColor: WHITE,
  },
  image: {
    height: heightPercentageToDP(25),
    width: widthPercentageToDP(35),
    resizeMode: 'contain',
    marginBottom: moderateScale(10),
    borderRadius: moderateScale(4),
  },
  text: {
    marginHorizontal: moderateScale(5),
    marginBottom: moderateScale(4),
    color: DARK_PURPLE_500,
  },
  textTitle: {
    fontSize: moderateScale(12),
  },
  textPrice: {
    fontSize: moderateScale(13),
    marginVertical: moderateScale(3),
  },
  textPublisher: {
    fontSize: moderateScale(10),
    letterSpacing: moderateScale(0.6),
  },
  textRating: {
    fontSize: moderateScale(11),
    marginTop: moderateScale(2),
  },
  heart: {
    marginStart: moderateScale(5),
  },
  containerImage: {alignItems: 'center'},
  containerBookInfo: {flexDirection: 'row', alignItems: 'center'},
});
