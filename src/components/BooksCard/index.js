import {StyleSheet, Image, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {BLACK, LIGTH_BLUE_500} from '../../helpers/colors';

const BooksCard = ({urlImage, onPress}) => {
  return (
    <View testID="booksCard" style={styles.containerBooks}>
      <TouchableOpacity
        testID="touchableBooksCard"
        style={styles.container}
        onPress={onPress}>
        <Image
          testID="imageBooksCard"
          style={styles.image}
          source={{uri: urlImage}}
        />
      </TouchableOpacity>
      <View style={styles.bawahan} />
    </View>
  );
};

export default BooksCard;

const styles = StyleSheet.create({
  containerBooks: {alignItems: 'center', marginBottom: moderateScale(10)},
  container: {
    marginHorizontal: moderateScale(40),
    elevation: moderateScale(10),
    shadowColor: BLACK,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
  },
  bawahan: {
    borderBottomWidth: moderateScale(15),
    borderColor: LIGTH_BLUE_500,
    borderBottomRightRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
    width: moderateScale(200),
    elevation: moderateScale(10),
    shadowColor: BLACK,
    shadowOpacity: 0.26,
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 10,
    marginTop: moderateScale(10),
  },
  image: {
    height: moderateScale(275),
    width: moderateScale(180),
    resizeMode: 'contain',
    borderRadius: moderateScale(4),
  },
  text: {
    margin: moderateScale(10),
    fontSize: moderateScale(13),
  },
});
