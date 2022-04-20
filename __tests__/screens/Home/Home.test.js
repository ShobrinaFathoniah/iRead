import React from 'react';
import Home from '../../../src/screens/Home';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

describe('Test Snapshoot', () => {
  test('Home Snapshoot', () => {
    jest.useFakeTimers();

    const snap = create(ContainerTesting(<Home />));
    expect(snap).toMatchSnapshot();
  });
});
