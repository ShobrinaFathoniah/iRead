import {StyleSheet} from 'react-native';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {
  LIGHT_BLUE_100_trans,
  LIGHT_BLUE_600,
  LIGTH_BLUE_500,
  RED_500,
} from '../../helpers/colors';

const styles = StyleSheet.create({
  page: {
    flex: 1,
    marginBottom: moderateScale(110),
  },
  searchBar: {
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(3),
    flexDirection: 'row',
    alignSelf: 'center',
    marginTop: moderateScale(5),
  },
  input: {
    backgroundColor: LIGHT_BLUE_100_trans,
    borderBottomWidth: moderateScale(0),
    width: widthPercentageToDP(70),
    paddingStart: moderateScale(40),
  },
  searchIcon: {
    alignItems: 'center',
    marginTop: moderateScale(7),
    marginRight: moderateScale(-35),
  },
  noDataSearch: {
    alignSelf: 'center',
    color: RED_500,
    fontSize: moderateScale(18),
  },
  title: {
    fontSize: moderateScale(23),
    color: LIGHT_BLUE_600,
    marginEnd: moderateScale(5),
    marginBottom: moderateScale(5),
  },
  recommendedSearch: {
    marginHorizontal: moderateScale(10),
    marginBottom: moderateScale(10),
  },
  header: {
    marginStart: moderateScale(15),
    marginVertical: moderateScale(15),
  },
  text: {
    fontSize: moderateScale(14),
    color: LIGTH_BLUE_500,
    marginStart: moderateScale(5),
    marginTop: moderateScale(5),
  },
  containerRecommendedSearch: {
    marginVertical: moderateScale(2),
  },
  containerLastSeen: {
    margin: moderateScale(15),
  },
});

export default styles;
