import * as React from 'react';
import Register from '../../../src/screens/Register';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

test('Register Snapshoot', () => {
  const snap = create(ContainerTesting(<Register />));
  expect(snap).toMatchSnapshot();
});
