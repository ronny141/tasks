import { render, waitFor } from '@testing-library/react-native';
import React from 'react';
import axios from 'axios';
import { useTasks } from '../useTasks';
import { Text } from 'react-native';

jest.mock('axios');
const mockedAxios = axios as jest.Mocked<typeof axios>;

const FakeTasksComponent = () => {
  const { fakeData, loading, error } = useTasks();

  if (loading) return <Text testID="loading">Loading...</Text>;
  if (error) return <Text testID="error">{error}</Text>;

  return (
    <>
      {fakeData.map((task, index) => (
        <Text testID="task" key={index}>{task.name}</Text>
      ))}
    </>
  );
};

describe('useTasks hook', () => {
  it('muestra tareas cuando la API responde con éxito', async () => {
    const mockData = [
      {
        id: '1',
        name: 'Pauline Blanda',
        avatar: 'https://cdn.fakercloud.com/avatars/mkginfo_128.jpg',
        createdAt: '2021-10-22T12:13:22.338Z',
      },
    ];

    mockedAxios.get.mockResolvedValueOnce({ data: mockData });

    const { getByTestId, findAllByTestId, queryByTestId } = render(<FakeTasksComponent />);

    expect(getByTestId('loading')).toBeDefined();

    const items = await findAllByTestId('task');
    expect(items).toHaveLength(1);
    expect(items[0].props.children).toContain('Pauline Blanda');

    expect(queryByTestId('loading')).toBeNull();
  });

  it('muestra mensaje de error si falla la API', async () => {
    mockedAxios.get.mockRejectedValueOnce(new Error('Network Error'));

    const { findByTestId } = render(<FakeTasksComponent />);

    const errorText = await findByTestId('error');
    expect(errorText.props.children).toContain('Network Error');
  });
});