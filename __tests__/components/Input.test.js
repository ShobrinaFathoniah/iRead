import React from 'react';
import Input from '../../src/components/Input';
import {create} from 'react-test-renderer';
import {DARK_PURPLE_300} from '../../src/helpers/colors';

describe('Input Component Testing', () => {
  const inputComponent = create(
    <Input placeholder="Input Testing" placeholderTextColor="#000000" />,
  );

  test('should render correctly', () => {
    const element = inputComponent.root.findByType('TextInput');
    expect(element).toBeTruthy();
    expect(element.props.placeholder).toEqual('Input Testing');
    expect(element.props.placeholderTextColor).toEqual('#000000');
    expect(element.props.style[0].borderColor).toEqual(DARK_PURPLE_300);
  });
});
