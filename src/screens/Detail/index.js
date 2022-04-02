import {View, Text} from 'react-native';
import React from 'react';

const Detail = ({route}) => {
  const {params} = route.params;
  const idBook = params.idBook;

  return (
    <View>
      <Text>{idBook}</Text>
      <Text> ini di detail</Text>
    </View>
  );
};

export default Detail;
