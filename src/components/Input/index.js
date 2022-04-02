import {StyleSheet, TextInput, View} from 'react-native';
import React from 'react';
import {
  BLACK,
  LIGHT_BLUE_300,
  LIGHT_BLUE_600,
  LIGTH_BLUE_500,
} from '../../helpers/colors';
import {moderateScale} from 'react-native-size-matters';

const Input = ({onChangeText, value, placeholder, secureTextEntry = false}) => {
  return (
    <View style={styles.containerInput}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeText}
        value={value}
        placeholder={placeholder}
        placeholderTextColor={LIGHT_BLUE_600}
        secureTextEntry={secureTextEntry}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  input: {
    width: moderateScale(270),
    height: moderateScale(46),
    marginBottom: moderateScale(12),
    borderBottomWidth: moderateScale(1),
    padding: moderateScale(10),
    borderColor: LIGHT_BLUE_300,
    borderRadius: moderateScale(5),
    color: LIGTH_BLUE_500,
  },
  containerInput: {
    alignSelf: 'center',
  },
});
