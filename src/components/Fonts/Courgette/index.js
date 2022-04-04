import {StyleSheet, Text} from 'react-native';
import React from 'react';

const Courgette = ({style, children}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const styles = StyleSheet.create({
    font: {
      fontFamily: `Courgette-Regular`,
    },
  });

  return <Text style={[styles.font, {...passedStyles}]}>{children}</Text>;
};

export default Courgette;
