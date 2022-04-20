import React from 'react';
import Login from '../../../src/screens/Login';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';

describe('State Testing', () => {
  test('State Should Works', () => {
    const component = create(ContainerTesting(<Login />));
    const root = component.root;
    const {login} = root.props.store.getState();
    expect(root.props.store).toBeTruthy();
    expect(login).toBeTruthy();
    expect(typeof login.dataToken).toEqual('string');

    jest.useFakeTimers();
  });
});
