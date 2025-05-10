import React from 'react';
import { render } from '@testing-library/react-native';
import { MockComponent } from '../../../__mocks__/ui';
import { List } from '../List';

jest.mock('@react-navigation/elements', () => ({
  Text: MockComponent,
}));

describe('List', () => {
  it('muestra el texto "List"', () => {
    const { getByText } = render(<List />);
    expect(getByText('List')).toBeTruthy();
  });
});
