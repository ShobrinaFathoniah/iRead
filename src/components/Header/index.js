import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {BLACK, DARK_PURPLE_100} from '../../helpers/colors';
import {PassionConflict} from '../Fonts';
import CircleButton from '../CircleButton';

const Header = ({
  button = false,
  nameIcon,
  onPressButton,
  radiusBottom = false,
  text = 'iRead',
}) => {
  return (
    <View
      style={[
        styles.page,
        {
          justifyContent: button ? 'space-evenly' : 'center',
          borderBottomEndRadius: radiusBottom ? 150 : 0,
          borderBottomStartRadius: radiusBottom ? 150 : 0,
        },
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor={DARK_PURPLE_100} />
      <PassionConflict style={styles.textAppName}>{text}</PassionConflict>
      {button ? (
        <CircleButton
          nameIcon={nameIcon}
          style={styles.button}
          onPress={onPressButton}
        />
      ) : null}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  page: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: DARK_PURPLE_100,
  },
  textAppName: {
    fontSize: moderateScale(42),
    margin: moderateScale(10),
    color: BLACK,
    letterSpacing: moderateScale(2),
    textAlign: 'center',
  },
  button: {},
});
