import {StyleSheet, View, StatusBar} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {BLACK, LIGHT_BLUE_300} from '../../helpers/colors';
import {PassionConflict} from '../Fonts';
import CircleButton from '../CircleButton';

const Header = ({
  button = false,
  nameIcon,
  onPressButton,
  onPressSearch,
  search = false,
}) => {
  return (
    <View
      style={[
        styles.page,
        {justifyContent: button ? 'space-between' : 'center'},
      ]}>
      <StatusBar barStyle="dark-content" backgroundColor={LIGHT_BLUE_300} />
      <PassionConflict style={styles.textAppName}>iRead</PassionConflict>
      <View style={{flexDirection: 'row'}}>
        {search ? (
          <CircleButton
            nameIcon="search1"
            style={styles.button}
            onPress={onPressSearch}
          />
        ) : null}

        {button ? (
          <CircleButton
            nameIcon={nameIcon}
            style={styles.button}
            onPress={onPressButton}
          />
        ) : null}
      </View>
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
    textAlign: 'center',
  },
  button: {
    marginRight: moderateScale(10),
  },
});
