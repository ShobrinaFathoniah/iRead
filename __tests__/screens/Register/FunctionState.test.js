import * as React from 'react';
import Register from '../../../src/screens/Register';
import {create} from 'react-test-renderer';
import ContainerTesting from '../../../src/helpers/reduxTesting';
import {checkEmail, isValidPassword} from '../../../src/helpers/validationData';

describe('Function and State Testing', () => {
  test('State Should Works', () => {
    const component = create(ContainerTesting(<Register />));
    const root = component.root;
    const {register} = root.props.store.getState();
    expect(root.props.store).toBeTruthy();
    expect(register).toBeTruthy();
    expect(typeof register.dataEmail).toEqual('string');
    expect(typeof register.dataPassword).toEqual('string');
    expect(typeof register.dataName).toEqual('string');
    jest.useFakeTimers();
  });

  describe('Function Should Works', () => {
    //check email function
    describe('Testing Email Function', () => {
      const email1 = 'adafa@dfgd.cvb';
      const email2 = 'adhad@dsd';
      const email3 = 127364;
      const email4 = 'asdhgadasdasdasd';

      test('should true', () => {
        expect(checkEmail(email1)).toEqual(true);
        jest.useFakeTimers();
      });

      test('should false cause not valid email ver 1', () => {
        expect(checkEmail(email2)).toEqual(false);
        jest.useFakeTimers();
      });

      test('should false cause not valid email ver 2', () => {
        expect(checkEmail(email4)).toEqual(false);
        jest.useFakeTimers();
      });

      test('should false cause not valid data type', () => {
        expect(checkEmail(email3)).toEqual(false);
        jest.useFakeTimers();
      });

      test('should false cause not valid input data', () => {
        expect(checkEmail()).toEqual(false);
        jest.useFakeTimers();
      });
    });

    //check password function
    describe('Testing Password Function', () => {
      const password1 = 'shgg1234';
      const password2 = 'adhadasd';
      const password3 = 127364;
      const password4 = '71234352';

      test('should true', () => {
        expect(isValidPassword(password1)).toEqual(true);
        jest.useFakeTimers();
      });

      test('should false cause not valid password ver 1', () => {
        expect(isValidPassword(password2)).toEqual(false);
        jest.useFakeTimers();
      });

      test('should false cause not valid password ver 2', () => {
        expect(isValidPassword(password4)).toEqual(false);
        jest.useFakeTimers();
      });

      test('should false cause not valid data type', () => {
        expect(isValidPassword(password3)).toEqual(false);
        jest.useFakeTimers();
      });

      test('should false cause not valid input data', () => {
        expect(isValidPassword()).toEqual(false);
        jest.useFakeTimers();
      });
    });
  });
});
