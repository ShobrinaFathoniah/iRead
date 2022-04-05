import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {
  BLACK,
  DARK_PURPLE_300,
  DARK_PURPLE_500,
  LIGHT_BLUE_300,
  LIGHT_BLUE_600,
  LIGTH_BLUE_500,
} from '../../helpers/colors';

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
  text: {
    color: LIGHT_BLUE_600,
    fontSize: moderateScale(12),
    letterSpacing: moderateScale(0.7),
  },
  textTitle: {
    fontSize: moderateScale(17),
    color: DARK_PURPLE_500,
    paddingRight: moderateScale(5),
  },
  coverImage: {
    height: heightPercentageToDP(20),
    width: widthPercentageToDP(33),
    resizeMode: 'contain',
    borderRadius: moderateScale(5),
  },
  containerAllBookInfo: {
    flexDirection: 'row',
    marginTop: moderateScale(5),
    paddingVertical: moderateScale(10),
  },
  containerImage: {
    flex: 1,
  },
  containerBookInfo: {
    flex: 2,
    margin: moderateScale(10),
  },
  textAuthor: {
    marginTop: moderateScale(10),
  },
  textPublisher: {
    marginTop: moderateScale(3),
  },
  containerRating: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: moderateScale(5),
  },
  textRating: {
    fontSize: moderateScale(14),
  },
  containerInfoAvailableBooks: {
    margin: moderateScale(10),
    flexDirection: 'row',
    justifyContent: 'center',
  },
  containerPages: {
    marginRight: moderateScale(30),
    alignItems: 'center',
  },
  textPages: {
    fontSize: moderateScale(15),
    marginTop: moderateScale(5),
  },
  containerStocks: {
    alignItems: 'center',
  },
  title: {
    fontSize: moderateScale(15),
  },
  textStocks: {
    fontSize: moderateScale(15),
    marginTop: moderateScale(5),
  },
  containerSold: {
    alignItems: 'center',
  },
  textSold: {
    fontSize: moderateScale(14),
    marginStart: moderateScale(5),
  },
  containerButtonBuy: {
    alignItems: 'flex-end',
    marginRight: moderateScale(10),
  },
  buttonBuy: {
    margin: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: LIGHT_BLUE_300,
    width: moderateScale(180),
    alignItems: 'center',
    borderRadius: moderateScale(5),
  },
  textButtonBuy: {
    fontSize: moderateScale(16),
    textAlign: 'center',
    color: BLACK,
  },
  containerOverview: {
    marginHorizontal: moderateScale(15),
  },
  titleSynopsis: {
    fontSize: moderateScale(18),
  },
  textSynopsis: {
    marginTop: moderateScale(10),
    fontSize: moderateScale(15.5),
    textAlign: 'justify',
    letterSpacing: moderateScale(1.8),
    color: DARK_PURPLE_300,
    marginHorizontal: moderateScale(10),
  },
});

export default styles;
