import {StyleSheet, TouchableOpacity, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../Input';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_100, LIGHT_BLUE_100_trans} from '../../helpers/colors';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = ({navigation}) => {
  const [search, setSearch] = useState('');

  const goToSearchPage = () => {
    navigation.navigate('Search', {
      params: {search},
    });
  };
  return (
    <View style={styles.searchBar}>
      <Input
        style={styles.input}
        onChangeText={value => setSearch(value)}
        value={search}
      />
      <TouchableOpacity onPress={goToSearchPage}>
        <Ionicons
          style={styles.searchIcon}
          name="search"
          size={40}
          color={LIGHT_BLUE_100}
        />
      </TouchableOpacity>
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  searchBar: {
    marginHorizontal: moderateScale(10),
    borderRadius: moderateScale(3),
    marginTop: moderateScale(15),
    flexDirection: 'row',
  },
  input: {
    backgroundColor: LIGHT_BLUE_100_trans,
    borderBottomWidth: moderateScale(0),
    width: widthPercentageToDP(85),
  },
  searchIcon: {
    alignItems: 'center',
    marginTop: moderateScale(3),
  },
});
