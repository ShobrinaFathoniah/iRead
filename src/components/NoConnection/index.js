import {View, Image} from 'react-native';
import React from 'react';
import {
  heightPercentageToDP,
  widthPercentageToDP,
} from 'react-native-responsive-screen';
import {LibreBaskerville} from '../Fonts';
import {moderateScale} from 'react-native-size-matters';
import {noConnectionPic} from '../../assets';
import {LIGHT_BLUE_600} from '../../helpers/colors';

const NoConnection = connection => {
  if (connection) {
    return null;
  } else if (!connection) {
    return (
      <View
        style={{
          justifyContent: 'center',
          margin: moderateScale(10),
        }}>
        <Image
          style={{
            width: widthPercentageToDP(70),
            height: heightPercentageToDP(40),
            resizeMode: 'contain',
            alignSelf: 'center',
          }}
          source={noConnectionPic}
        />
        <LibreBaskerville
          style={{
            fontSize: 17,
            color: LIGHT_BLUE_600,
            textAlign: 'center',
            margin: moderateScale(15),
          }}>
          Turn On your Internet Connection, Please! :)
        </LibreBaskerville>
      </View>
    );
  }
};

export default NoConnection;
