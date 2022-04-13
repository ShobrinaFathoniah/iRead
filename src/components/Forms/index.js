import {StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {moderateScale} from 'react-native-size-matters';
import {
  BLACK,
  DARK_PURPLE_300,
  DARK_PURPLE_500,
  WHITE,
} from '../../helpers/colors';
import {loginPic, registerPic} from '../../assets';
import {Courgette, LibreBaskerville} from '../Fonts';

const Forms = ({type, children, onPressButton, onPressText}) => {
  const image = () => {
    if (type === 'Login') {
      return <Image style={styles.image} source={loginPic} />;
    } else if (type === 'Register') {
      return <Image style={styles.image} source={registerPic} />;
    } else {
      return null;
    }
  };

  const helpText = types => {
    if (types === 'Login') {
      return (
        <View style={styles.containerTextHelper}>
          <LibreBaskerville style={{color: BLACK}}>
            Not Have an Account?
          </LibreBaskerville>
          <TouchableOpacity onPress={onPressText}>
            <LibreBaskerville style={styles.text}>Register</LibreBaskerville>
          </TouchableOpacity>
        </View>
      );
    } else if (types === 'Register') {
      return (
        <View style={styles.containerTextHelper}>
          <LibreBaskerville style={{color: BLACK}}>
            Have an Account?
          </LibreBaskerville>
          <TouchableOpacity onPress={onPressText}>
            <LibreBaskerville style={styles.text}>Login</LibreBaskerville>
          </TouchableOpacity>
        </View>
      );
    }
  };

  return (
    <View>
      <Courgette style={styles.title}>{type}</Courgette>
      {image()}
      {children}
      <TouchableOpacity style={styles.button} onPress={onPressButton}>
        <LibreBaskerville style={styles.buttonText}>{type}</LibreBaskerville>
      </TouchableOpacity>
      {helpText(type)}
    </View>
  );
};

export default Forms;

const styles = StyleSheet.create({
  button: {
    padding: moderateScale(10),
    borderRadius: moderateScale(3),
    alignSelf: 'center',
    backgroundColor: DARK_PURPLE_300,
    margin: moderateScale(10),
    width: moderateScale(260),
  },
  buttonText: {
    alignSelf: 'center',
    color: WHITE,
    fontSize: moderateScale(14),
  },
  image: {
    width: moderateScale(250),
    height: moderateScale(300),
    resizeMode: 'contain',
    alignSelf: 'center',
  },
  text: {
    fontSize: moderateScale(12),
    color: DARK_PURPLE_500,
    marginStart: moderateScale(10),
  },
  containerTextHelper: {
    flexDirection: 'row',
    margin: moderateScale(10),
    alignSelf: 'center',
  },
  title: {
    color: DARK_PURPLE_500,
    alignSelf: 'center',
    fontSize: moderateScale(32),
    letterSpacing: moderateScale(0.5),
    marginTop: moderateScale(15),
  },
});
