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
import {DARK_PURPLE_500, RED_500} from '../../helpers/colors';
import PopularCard from '../PopularCard';
import {navigate} from '../../helpers/navigate';
import Recommended from '../Recommended';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Header from '../Header';
import {getTimeNow} from '../../helpers/timeNow';
import LoadingBar from '../LoadingBar';
import {useSelector} from 'react-redux';

const Popular = ({
  data1,
  data2,
  onRefresh,
  refreshing,
  hideTitle = false,
  onLogout,
  time,
  headerShown = true,
  hideLoading = false,
}) => {
  const {isLoading} = useSelector(state => state.global);

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

  // console.log(getTimeNow(time));
  // console.log(time, 'popular');

  const header = recommendedBooks => {
    return (
      <View>
        {headerShown ? (
          <Header
            button={true}
            nameIcon="logout"
            onPressButton={onLogout}
            radiusBottom={true}
            text={getTimeNow(time)}
          />
        ) : null}

        <Recommended data={recommendedBooks} hideTitle={hideTitle} />
        {hideTitle ? null : (
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: moderateScale(25),
            }}>
            <LibreBaskerville type="Bold" style={styles.bab}>
              Popular Books
            </LibreBaskerville>
            <AntDesign
              style={{marginStart: moderateScale(5)}}
              name="heart"
              size={20}
              color={RED_500}
            />
          </View>
        )}
        {hideLoading ? null : LoadingBar(isLoading)}
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
    marginStart: moderateScale(15),
    color: DARK_PURPLE_500,
  },
});
