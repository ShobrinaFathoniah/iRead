import {StyleSheet, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {LIGTH_BLUE_500} from '../../helpers/colors';

const BooksCard = ({urlImage, title, onPress}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Image style={styles.image} source={{uri: urlImage}} />
      {/* <LibreBaskerville style={styles.text}>{title}</LibreBaskerville> */}
    </TouchableOpacity>
  );
};

export default BooksCard;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: moderateScale(40),
    alignItems: 'center',
    borderBottomWidth: moderateScale(15),
    borderColor: LIGTH_BLUE_500,
    borderBottomRightRadius: moderateScale(10),
    borderBottomLeftRadius: moderateScale(10),
  },
  image: {
    height: moderateScale(250),
    width: moderateScale(200),
    resizeMode: 'contain',
    borderRadius: moderateScale(4),
    margin: moderateScale(10),
  },
  text: {
    margin: moderateScale(10),
    fontSize: moderateScale(13),
  },
});
