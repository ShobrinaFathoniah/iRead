import React from 'react';
import BooksCard from '../../src/components/BooksCard';
import {render} from '@testing-library/react-native';
import {moderateScale} from 'react-native-size-matters';

describe('BooksCard Component Testing', () => {
  const image = 'https://i.ytimg.com/vi/Ii8h7DCIcMo/maxresdefault.jpg';
  const {getByTestId, toJSON} = render(<BooksCard urlImage={image} />);

  test('should render correctly', () => {
    const element = getByTestId('booksCard');
    expect(element).toBeTruthy();

    const element2 = getByTestId('touchableBooksCard');
    expect(element2).toBeTruthy();

    const element3 = getByTestId('imageBooksCard');
    expect(element3).toBeTruthy();
    expect(element3.props.style.height).toEqual(moderateScale(275));
  });
});
