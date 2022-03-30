import {View} from 'react-native';
import React from 'react';
import * as Progress from 'react-native-progress';
// import {PURPLE_500} from '../../utils/colors';

const LoadingBar = loading => {
  if (loading) {
    return (
      <View style={{justifyContent: 'center', alignSelf: 'center'}}>
        <Progress.CircleSnail
          size={80}
          indeterminate={true}
          thickness={5}
          //   color={PURPLE_500}
        />
      </View>
    );
  } else {
    return null;
  }
};

export default LoadingBar;
