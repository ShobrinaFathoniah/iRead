import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {BLACK, LIGHT_BLUE_300} from '../../helpers/colors';
import {LibreBaskerville} from '../Fonts';

const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity
      style={{
        padding: moderateScale(10),
        backgroundColor: LIGHT_BLUE_300,
        borderRadius: moderateScale(5),
        marginHorizontal: moderateScale(5),
        height: moderateScale(40),
      }}
      onPress={onPress}>
      <LibreBaskerville style={{color: BLACK}}>{text}</LibreBaskerville>
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
