import {StyleSheet, Image, View, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {
  DARK_PURPLE_500,
  LIGHT_BLUE_300,
  LIGHT_BLUE_600,
  LIGTH_BLUE_500,
  YELLOW_200,
} from '../../helpers/colors';
import {LibreBaskerville} from '../Fonts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch, useSelector} from 'react-redux';
import {setHeart} from '../../store/globalAction';

const PopularCard = ({urlImage, title, price, rating, publisher}) => {
  const dispatch = useDispatch();
  const heart = useSelector(state => state.global.heart);

  const priceTooIDR = Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
  })
    .format(price)
    .split(',')[0];

  const loved = () =>
    heart ? dispatch(setHeart(false)) : dispatch(setHeart(true));

  return (
    <View style={styles.page}>
      <View>
        <View style={{alignItems: 'center'}}>
          <Image style={styles.image} source={{uri: urlImage}} />
        </View>
        <View style={{margin: moderateScale(7)}}>
          <LibreBaskerville
            numberOfLines={2}
            style={[styles.text, styles.textTitle]}>
            {title}
          </LibreBaskerville>
          <LibreBaskerville type="Bold" style={[styles.text, styles.textPrice]}>
            {priceTooIDR}
          </LibreBaskerville>
          <LibreBaskerville style={[styles.text, styles.textPublisher]}>
            {publisher}
          </LibreBaskerville>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <MaterialIcons name="star" size={17} color={YELLOW_200} />
            <LibreBaskerville style={[styles.text, styles.textRating]}>
              {rating}
            </LibreBaskerville>
            <TouchableOpacity onPress={loved}>
              <AntDesign
                style={styles.heart}
                name={heart ? 'heart' : 'hearto'}
                size={15}
                color={LIGHT_BLUE_300}
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
    borderRadius: moderateScale(4),
    borderWidth: moderateScale(0.2),
    margin: moderateScale(5),
    borderColor: DARK_PURPLE_500,
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
    color: LIGHT_BLUE_600,
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
});
