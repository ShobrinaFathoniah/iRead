import {StyleSheet, View} from 'react-native';
import React from 'react';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {YELLOW_200, YELLOW_500} from '../../helpers/colors';
import {moderateScale} from 'react-native-size-matters';

const Rating = ({rating}) => {
  const ratingBagiDua = rating / 2;

  if (ratingBagiDua === 5) {
    return (
      <View style={styles.container}>
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
      </View>
    );
  } else if (ratingBagiDua < 5 && ratingBagiDua >= 4) {
    return (
      <View style={styles.container}>
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
      </View>
    );
  } else if (ratingBagiDua < 4 && ratingBagiDua >= 3) {
    return (
      <View style={styles.container}>
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
      </View>
    );
  } else if (ratingBagiDua < 3 && ratingBagiDua >= 2) {
    return (
      <View style={styles.container}>
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
      </View>
    );
  } else if (ratingBagiDua < 2 && ratingBagiDua >= 1) {
    return (
      <View style={styles.container}>
        <MaterialIcons name="star" size={25} color={YELLOW_500} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
      </View>
    );
  } else {
    return (
      <View style={styles.container}>
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
        <MaterialIcons name="star" size={25} color={YELLOW_200} />
      </View>
    );
  }
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    marginRight: moderateScale(10),
  },
});
