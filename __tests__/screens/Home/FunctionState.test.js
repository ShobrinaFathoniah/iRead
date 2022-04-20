import React from 'react';
import Home from '../../../src/screens/Home';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';
import {getTimeNow} from '../../../src/helpers/timeNow';

describe('Function and State Testing', () => {
  test('State Should Work Properly', () => {
    jest.useFakeTimers();

    const homeComponent = ContainerTesting(<Home />);
    const component = create(homeComponent);
    const root = component.root;
    const {home} = root.props.store.getState();
    expect(root.props.store).toBeTruthy();
    expect(home).toBeTruthy();
    const dataHome = home.data;
    expect(typeof dataHome).toEqual('object');
  });

  test('Function Should Work Properly', () => {
    jest.useFakeTimers();

    expect(getTimeNow(10)).toEqual('Selamat Pagi!');
    expect(getTimeNow(14)).toEqual('Selamat Siang!');
    expect(getTimeNow(17)).toEqual('Selamat Sore!');
    expect(getTimeNow(23)).toEqual('Selamat Malam!');
    expect(getTimeNow(0)).toEqual('Selamat Pagi!');
  });
});
