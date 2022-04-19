import {StyleSheet} from 'react-native';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {moderateScale} from 'react-native-size-matters';
import {
  BLACK,
  DARK_PURPLE_100_trans,
  DARK_PURPLE_500,
  LIGHT_BLUE_300,
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
  miniButtonPdf: {
    margin: moderateScale(10),
  },
  text: {
    color: DARK_PURPLE_500,
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
    marginRight: moderateScale(10),
  },
  buttonBuy: {
    marginStart: moderateScale(10),
    padding: moderateScale(10),
    backgroundColor: LIGHT_BLUE_300,
    width: moderateScale(160),
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
    marginTop: moderateScale(10),
  },
  textSynopsis: {
    fontSize: moderateScale(14),
    textAlign: 'justify',
    letterSpacing: moderateScale(0.7),
    color: DARK_PURPLE_500,
  },
  synopsisContainer: {
    marginTop: moderateScale(5),
    marginEnd: moderateScale(5),
    borderRadius: moderateScale(10),
  },
  containerAllButton: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    margin: moderateScale(10),
  },
  containerPdf: {
    height: heightPercentageToDP(80),
    margin: moderateScale(10),
    backgroundColor: DARK_PURPLE_100_trans,
  },
  pdf: {
    height: heightPercentageToDP(80),
    margin: moderateScale(5),
  },
});

export default styles;
