import * as React from 'react';
import Search from '../../../src/screens/Search';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

test('Search Snapshoot', () => {
  const snap = create(ContainerTesting(<Search />));
  expect(snap).toMatchSnapshot();

  jest.useFakeTimers();
});
