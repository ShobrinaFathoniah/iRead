import * as React from 'react';
import Login from '../../../src/screens/Login';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

test('Login Snapshoot', () => {
  const snap = create(ContainerTesting(<Login />));
  expect(snap).toMatchSnapshot();

  jest.useFakeTimers();
});
