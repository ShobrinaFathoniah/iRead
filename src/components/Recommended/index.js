import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {LibreBaskerville} from '../Fonts';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_600, LIGTH_BLUE_500} from '../../helpers/colors';
import {FlatList} from 'react-native-gesture-handler';
import BooksCard from '../BooksCard';

const Recommended = ({data, onPress}) => {
  const header = () => {
    return (
      <LibreBaskerville style={styles.bab}>Recommended Books</LibreBaskerville>
    );
  };

  const footer = () => {
    return <LibreBaskerville>Finish</LibreBaskerville>;
  };

  const booksCard = ({item}) => {
    return (
      <View>
        <BooksCard
          urlImage={item.cover_image}
          title={item.title}
          onPress={onPress}
        />
      </View>
    );
  };

  return (
    <View>
      <LibreBaskerville style={styles.bab}>Recommended Books</LibreBaskerville>
      <FlatList
        data={data}
        horizontal={true}
        keyExtractor={(_item, index) => index}
        renderItem={booksCard}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

export default Recommended;

const styles = StyleSheet.create({
  bab: {
    fontSize: moderateScale(20),
    margin: moderateScale(10),
    marginStart: moderateScale(15),
    color: LIGHT_BLUE_600,
  },
});
