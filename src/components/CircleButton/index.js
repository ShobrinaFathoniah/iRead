import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {
  BLACK,
  DARK_PURPLE_100,
  LIGHT_BLUE_100,
  LIGHT_BLUE_100_trans,
  LIGHT_BLUE_300,
  LIGHT_BLUE_600,
  WHITE,
} from '../../helpers/colors';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const CircleButton = ({
  style,
  nameIcon,
  color = LIGHT_BLUE_600,
  size = 20,
  onPress,
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.circle, {...passedStyles}]}>
      <FontAwesome name={nameIcon} color={color} size={size} />
    </TouchableOpacity>
  );
};

export default CircleButton;

const styles = StyleSheet.create({
  circle: {
    height: moderateScale(40),
    width: moderateScale(40),
    borderRadius: moderateScale(100),
    backgroundColor: WHITE,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
