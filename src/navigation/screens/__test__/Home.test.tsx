import React from 'react';
import { render } from '@testing-library/react-native';
import { MockComponent } from '../../../__mocks__/ui';
import { Home } from '../Home';


jest.mock('@react-navigation/elements', () => ({
  Button: MockComponent,
}));

describe('Home screen', () => {
  it('renderiza el botón de Tasks', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('tasks-id')).toBeTruthy();
  });

  it('renderiza el botón de List', () => {
    const { getByTestId } = render(<Home />);
    expect(getByTestId('list-id')).toBeTruthy();
  });
});