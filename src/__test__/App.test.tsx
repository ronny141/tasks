import React from 'react';
import { Text } from 'react-native';
import { render } from '@testing-library/react-native';
import { MockComponent } from '../__mocks__/ui';
import { App } from '../App'; // importa el componente sin default
import { Provider } from 'react-redux';
import { store } from '../store/store';
import getContainerRoot from '../__mocks__/helpers/getContainerRoot';
import * as SplashScreen from 'expo-splash-screen';

jest.mock('expo-splash-screen', () => ({
  preventAutoHideAsync: jest.fn(),
}));

jest.mock('expo-asset', () => ({
  Asset: {
    loadAsync: jest.fn(),
  },
}));

jest.mock('@react-navigation/elements', () => ({
  Assets: [],
}));

jest.mock('../navigation', () => ({
  Navigation: MockComponent,
}));

describe('App', () => {
  it('renderiza sin crashear', () => {
    const { UNSAFE_root } = render(
     <Provider store={store}>
        <App />
     </Provider>
    );
    const container = getContainerRoot(UNSAFE_root);
    expect(container).toBeTruthy();
  });

});
