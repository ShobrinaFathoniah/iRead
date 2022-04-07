import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {Courgette, LibreBaskerville} from '../../components';
import {moderateScale} from 'react-native-size-matters';
import {
  DARK_PURPLE_100,
  DARK_PURPLE_300,
  DARK_PURPLE_300_trans,
  DARK_PURPLE_500,
  WHITE,
} from '../../helpers/colors';
import Feather from 'react-native-vector-icons/Feather';

const SuccessRegister = ({navigation}) => {
  const goToLogin = () => navigation.navigate('Login');

  return (
    <View>
      <Courgette style={styles.text}>Registration Completed!</Courgette>
      <Feather
        style={styles.check}
        name="check-circle"
        size={150}
        color={DARK_PURPLE_100}
      />
      <LibreBaskerville style={styles.textMessage}>
        We sent email verification to your email, Please Check It!
      </LibreBaskerville>
      <TouchableOpacity style={styles.button} onPress={goToLogin}>
        <LibreBaskerville style={styles.buttonText}>
          Back to Login
        </LibreBaskerville>
      </TouchableOpacity>
    </View>
  );
};

export default SuccessRegister;

const styles = StyleSheet.create({
  text: {
    letterSpacing: moderateScale(1),
    fontSize: moderateScale(28),
    alignSelf: 'center',
    marginTop: moderateScale(60),
    color: DARK_PURPLE_500,
  },
  check: {
    alignSelf: 'center',
    marginTop: moderateScale(100),
  },
  textMessage: {
    fontSize: moderateScale(19),
    marginTop: moderateScale(50),
    color: DARK_PURPLE_300,
    textAlign: 'center',
    padding: moderateScale(5),
  },
  button: {
    padding: moderateScale(10),
    borderRadius: moderateScale(3),
    alignSelf: 'center',
    backgroundColor: DARK_PURPLE_300_trans,
    margin: moderateScale(10),
    width: moderateScale(260),
    marginTop: moderateScale(60),
  },
  buttonText: {
    alignSelf: 'center',
    color: WHITE,
    fontSize: moderateScale(14),
  },
});
