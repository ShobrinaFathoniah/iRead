import {StyleSheet} from 'react-native';
import {moderateScale} from 'react-native-size-matters';

const styles = StyleSheet.create({
  allButtons: {
    flexDirection: 'row',
    margin: moderateScale(10),
  },
  miniButtons2: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end',
  },
});

export default styles;
