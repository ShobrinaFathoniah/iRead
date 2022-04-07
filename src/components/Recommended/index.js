import {StyleSheet, View} from 'react-native';
import React from 'react';
import {LibreBaskerville} from '../Fonts';
import {moderateScale} from 'react-native-size-matters';
import {DARK_PURPLE_500, YELLOW_500} from '../../helpers/colors';
import {FlatList} from 'react-native-gesture-handler';
import BooksCard from '../BooksCard';
import {navigate} from '../../helpers/navigate';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import LoadingBar from '../LoadingBar';
import {useSelector} from 'react-redux';

const Recommended = ({data, hideTitle}) => {
  const {isLoading} = useSelector(state => state.global);

  const booksCard = ({item}) => {
    const idBook = item.id;
    return (
      <View>
        <BooksCard
          urlImage={item.cover_image}
          title={item.title}
          onPress={() => {
            navigate('Detail', {
              params: {idBook},
            });
          }}
        />
      </View>
    );
  };

  return (
    <View>
      {hideTitle ? null : (
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            marginVertical: moderateScale(15),
          }}>
          <LibreBaskerville type="Bold" style={styles.bab}>
            Recommended Books
          </LibreBaskerville>
          <MaterialIcons
            style={{marginStart: moderateScale(5)}}
            name="star"
            size={30}
            color={YELLOW_500}
          />
        </View>
      )}
      {LoadingBar(isLoading)}

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
    color: DARK_PURPLE_500,
    marginStart: moderateScale(15),
  },
});
