import * as React from 'react';
import Detail from '../../../src/screens/Detail';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

test('Detail Snapshoot', () => {
  jest.useFakeTimers();

  const mockedParams = {
    route: {params: {params: '6231453513c01e6f8b566ecb'}},
    navigation: '',
  };

  const snap = create(ContainerTesting(<Detail {...mockedParams} />));
  expect(snap).toMatchSnapshot();
});
