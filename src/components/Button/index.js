import {TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {BLACK, DARK_PURPLE_300_trans} from '../../helpers/colors';
import {LibreBaskerville} from '../Fonts';

const Button = ({onPress, text}) => {
  return (
    <TouchableOpacity
      testID="button"
      style={{
        padding: moderateScale(10),
        backgroundColor: DARK_PURPLE_300_trans,
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
