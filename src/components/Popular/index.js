import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LibreBaskerville} from '../Fonts';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_600} from '../../helpers/colors';

const Popular = () => {
  return (
    <View>
      <LibreBaskerville style={styles.bab}>Popular Books</LibreBaskerville>
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  bab: {
    fontSize: moderateScale(20),
    margin: moderateScale(10),
    marginStart: moderateScale(15),
    marginTop: moderateScale(25),
    color: LIGHT_BLUE_600,
  },
});
