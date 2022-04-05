import {StyleSheet, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_600, WHITE} from '../../helpers/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

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
      <AntDesign name={nameIcon} color={color} size={size} />
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
