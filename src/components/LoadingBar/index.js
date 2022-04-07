import {View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
import {DARK_PURPLE_500} from '../../helpers/colors';

const LoadingBar = loading => {
  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <Progress.CircleSnail
          size={80}
          indeterminate={true}
          thickness={5}
          color={DARK_PURPLE_500}
        />
      </View>
    );
  } else {
    return null;
  }
};

export default LoadingBar;
