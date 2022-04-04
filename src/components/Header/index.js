import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {BLACK, LIGHT_BLUE_300} from '../../helpers/colors';
import {PassionConflict} from '../Fonts';
import CircleButton from '../CircleButton';

const Header = ({button = false, name}) => {
  return (
    <View
      style={[
        styles.page,
        {justifyContent: button ? 'space-between' : 'center'},
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor={LIGHT_BLUE_300} />
      <PassionConflict style={styles.textAppName}>iRead</PassionConflict>

      {button ? <CircleButton name={name} style={styles.button} /> : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: LIGHT_BLUE_300,
  },
  textAppName: {
    fontSize: moderateScale(45),
    margin: moderateScale(10),
    color: BLACK,
    letterSpacing: moderateScale(2),
  },
  button: {
    marginRight: moderateScale(10),
  },
});
