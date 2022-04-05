import {StyleSheet, View} from 'react-native';
import React, {useState} from 'react';
import Input from '../Input';
import {moderateScale} from 'react-native-size-matters';
import {LIGHT_BLUE_100_trans, LIGTH_BLUE_500} from '../../helpers/colors';
import {widthPercentageToDP} from 'react-native-responsive-screen';
import Ionicons from 'react-native-vector-icons/Ionicons';

const Search = () => {
  const [search, setSearch] = useState('');

  return (
    <View style={styles.searchBar}>
      <Ionicons
        style={styles.searchIcon}
        name="search"
        size={30}
        color={LIGTH_BLUE_500}
      />
      <Input
        style={styles.input}
        onChangeText={value => setSearch(value)}
        value={search}
      />
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
    alignSelf: 'center',
  },
  input: {
    backgroundColor: LIGHT_BLUE_100_trans,
    borderBottomWidth: moderateScale(0),
    width: widthPercentageToDP(70),
    paddingLeft: moderateScale(45),
  },
  searchIcon: {
    alignItems: 'center',
    marginRight: moderateScale(-35),
    marginTop: moderateScale(7),
  },
});
