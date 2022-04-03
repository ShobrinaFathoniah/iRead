import {StyleSheet, Text} from 'react-native';
import React from 'react';

const LibreBaskerville = ({
  style,
  children,
  type = 'Regular',
  numberOfLines = 0,
}) => {
  const passedStyles = Array.isArray(style)
    ? Object.assign({}, ...style)
    : style;

  const styles = StyleSheet.create({
    font: {
      fontFamily: `LibreBaskerville-${type}`,
    },
  });

  return (
    <Text
      numberOfLines={numberOfLines}
      ellipsizeMode="tail"
      style={[styles.font, {...passedStyles}]}>
      {children}
    </Text>
  );
};

export default LibreBaskerville;
