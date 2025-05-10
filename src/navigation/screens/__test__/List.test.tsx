
import React from 'react';
import { render, waitFor } from '@testing-library/react-native';
import { MockComponent } from '../../../__mocks__/ui';
import { useTasks } from '../../../hooks/useTasks';
import { List } from '../List';

jest.mock('../../../hooks/useTasks');

jest.mock('@react-navigation/elements', () => ({
  Text: MockComponent,
}));

describe('List screen', () => {
  beforeEach(() => {
    (useTasks as jest.Mock).mockReturnValue({
      fakeData: [
        {
          id: '1',
          name: 'Pauline Blanda',
          avatar: 'https://cdn.fakercloud.com/avatars/mkginfo_128.jpg',
          createdAt: '2021-10-22T12:13:22.338Z',
        },
      ],
    });
  });

  it('muestra los nombres y avatares desde el hook', async () => {
    const { getByText } = render(<List />);
    await waitFor(() => {
        expect(getByText('Pauline Blanda')).toBeTruthy();
    }      
);
  });
});