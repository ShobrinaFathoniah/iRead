import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {
  BLACK,
  LIGHT_BLUE_100,
  LIGHT_BLUE_100_trans,
  LIGTH_BLUE_500,
} from '../../helpers/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

const CircleButton = ({style, name, color = BLACK, size = 12}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <TouchableOpacity style={[styles.circle, {...passedStyles}]}>
      <AntDesign
        style={{alignSelf: 'center'}}
        name={name}
        color={color}
        size={size}
      />
    </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  circle: {
    height: moderateScale(35),
    width: moderateScale(35),
    borderRadius: moderateScale(100),
    backgroundColor: LIGHT_BLUE_100,
  },
});
