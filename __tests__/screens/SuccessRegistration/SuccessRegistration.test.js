import * as React from 'react';
import SuccessRegistration from '../../../src/screens/SuccessRegister';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

test('SuccessRegistration Snapshoot', () => {
  const snap = create(ContainerTesting(<SuccessRegistration />));
  expect(snap).toMatchSnapshot();
});
