import {View, Image} from 'react-native';
import React from 'react';
// import {MAIN_COLOR, PRIMARY_DARK} from '../../utils/colors';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
// import {NoInternetPic} from '../../assets';
import {LibreBaskerville} from '../Fonts';
import {moderateScale} from 'react-native-size-matters';

const NoConnection = connection => {
  if (connection) {
    return null;
  } else if (!connection) {
    return (
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          // backgroundColor: PRIMARY_DARK,
          margin: moderateScale(10),
        }}>
        <Image
          style={{
            width: widthPercentageToDP(70),
            height: heightPercentageToDP(40),
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
          // source={NoInternetPic}
        />
        <LibreBaskerville
          style={{
            fontSize: 17,
            // color: MAIN_COLOR,
            textAlign: 'center',
            margin: moderateScale(15),
          }}>
          Turn On your Internet Connection and Refresh the Screen, Please! :)
        </LibreBaskerville>
      </View>
    );
  }
};

export default NoConnection;
