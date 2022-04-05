import {
  StyleSheet,
  FlatList,
  View,
  TouchableOpacity,
  RefreshControl,
} from 'react-native';
import React from 'react';
import {LibreBaskerville} from '../Fonts';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_600} from '../../helpers/colors';
import PopularCard from '../PopularCard';
import {navigate} from '../../helpers/navigate';
import Recommended from '../Recommended';

const Popular = ({data1, data2, onRefresh, refreshing, hideTitle = false}) => {
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
          id_book={idBook}
        />
      </TouchableOpacity>
    );
  };

  const header = recommendedBooks => {
    return (
      <View>
        <Recommended data={recommendedBooks} hideTitle={hideTitle} />
        {hideTitle ? null : (
          <LibreBaskerville style={styles.bab}>Popular Books</LibreBaskerville>
        )}
      </View>
    );
  };

  return (
    <View style={{marginBottom: moderateScale(10)}}>
      <FlatList
        refreshControl={
          <RefreshControl onRefresh={onRefresh} refreshing={refreshing} />
        }
        data={data1}
        keyExtractor={(_item, index) => index}
        renderItem={popularCard}
        horizontal={false}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        ListHeaderComponent={header(data2)}
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
