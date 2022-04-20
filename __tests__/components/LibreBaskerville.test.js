import React from 'react';
import LibreBaskerville from '../../src/components/Fonts/LibreBaskerville';
import {create} from 'react-test-renderer';
import {BLACK, PURPLE} from '../../src/helpers/colors';

describe('LibreBaskerville Component Testing', () => {
  const librebaskervilleComponent = create(
    <LibreBaskerville
      style={{color: BLACK, textAlign: 'center', backgroundColor: PURPLE}}
      numberOfLines={3}>
      Hallo ini dari Testing
    </LibreBaskerville>,
  );

  test('should render correctly', () => {
    const element = librebaskervilleComponent.root.findByType('Text');
    expect(element).toBeTruthy();
    expect(element.props.children).toEqual('Hallo ini dari Testing');
    expect(element.props.numberOfLines).toEqual(3);
    expect(element.props.style[1].color).toEqual(BLACK);
    expect(element.props.style[1].textAlign).toEqual('center');
    expect(element.props.style[1].backgroundColor).toEqual(PURPLE);
  });
});
