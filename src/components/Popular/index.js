import {StyleSheet, FlatList, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {LibreBaskerville} from '../Fonts';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_600} from '../../helpers/colors';
import PopularCard from '../PopularCard';
import {navigate} from '../../helpers/navigate';

const Popular = ({data}) => {
  const popularCard = ({item}) => {
    const idBook = item.id;

    return (
      <TouchableOpacity
        onPress={() => {
          navigate('Detail', {
            params: {idBook},
          });
        }}>
        <PopularCard
          urlImage={item.cover_image}
          title={item.title}
          price={item.price}
          publisher={item.publisher}
          rating={item.average_rating}
        />
      </TouchableOpacity>
    );
  };

  return (
    <View style={{marginBottom: moderateScale(10)}}>
      <LibreBaskerville style={styles.bab}>Popular Books</LibreBaskerville>
      <FlatList
        data={data}
        keyExtractor={(_item, index) => index}
        renderItem={popularCard}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        scrollEnabled={false}
        numColumns={2}
      />
    </View>
  );
};

export default Popular;

const styles = StyleSheet.create({
  bab: {
    fontSize: moderateScale(20),
    margin: moderateScale(10),
    marginStart: moderateScale(15),
    marginTop: moderateScale(25),
    color: LIGHT_BLUE_600,
  },
});
