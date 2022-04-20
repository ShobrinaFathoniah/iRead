import React from 'react';
import {TouchableOpacity} from 'react-native';
import Button from '../../src/components/Button';
import {create} from 'react-test-renderer';
import {moderateScale} from 'react-native-size-matters';

describe('BooksCard Component Testing', () => {
  const buttonComponent = create(<Button text="Testing Button" />);

  test('should render correctly', () => {
    const element3 = buttonComponent.root.findByType(TouchableOpacity);
    expect(element3).toBeTruthy();
    expect(element3.props.style.height).toEqual(moderateScale(40));
  });
});
