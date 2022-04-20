import React from 'react';
import BooksCard from '../../src/components/BooksCard';
import {create} from 'react-test-renderer';
import {moderateScale} from 'react-native-size-matters';

describe('BooksCard Component Testing', () => {
  const image = 'https://i.ytimg.com/vi/Ii8h7DCIcMo/maxresdefault.jpg';
  const bookCardComponent = create(<BooksCard urlImage={image} />);

  test('should render correctly', () => {
    const element3 = bookCardComponent.root.findByType('Image');
    expect(element3).toBeTruthy();
    expect(element3.props.style.height).toEqual(moderateScale(275));
  });
});
