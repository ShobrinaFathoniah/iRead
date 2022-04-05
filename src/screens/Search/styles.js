import {StyleSheet, Text, View} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_100_trans, RED_500} from '../../helpers/colors';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginBottom: moderateScale(150),
  },
  searchBar: {
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(3),
    marginTop: moderateScale(15),
    flexDirection: 'row',
    alignSelf: 'center',
  },
  input: {
    backgroundColor: LIGHT_BLUE_100_trans,
    borderBottomWidth: moderateScale(0),
    width: widthPercentageToDP(70),
    paddingHorizontal: moderateScale(20),
  },
  searchIcon: {
    alignItems: 'center',
    marginTop: moderateScale(7),
    marginStart: moderateScale(4),
  },
  noDataSearch: {
    alignSelf: 'center',
    color: RED_500,
    fontSize: moderateScale(18),
  },
});

export default styles;
