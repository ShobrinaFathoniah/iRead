import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';
import {DARK_PURPLE_100_trans, RED_500} from '../../helpers/colors';

const styles = StyleSheet.create({
  erorText: {
    color: RED_500,
    fontSize: moderateScale(12),
    textAlign: 'center',
    padding: moderateScale(10),
    backgroundColor: DARK_PURPLE_100_trans,
    borderRadius: moderateScale(5),
    width: moderateScale(270),
    alignSelf: 'center',
  },
  passwordError: {
    width: moderateScale(300),
  },
});

export default styles;
