import 'react-native';
import { Provider } from "react-redux";
import { Assets as NavigationAssets } from "@react-navigation/elements";
import { Asset } from "expo-asset";
import * as SplashScreen from "expo-splash-screen";
import * as React from "react";
import { Navigation } from "./navigation";

import { store } from "./store/store";


Asset.loadAsync([
  ...NavigationAssets,
  require("./assets/newspaper.png"),
  require("./assets/bell.png"),
]);

SplashScreen.preventAutoHideAsync();

export function App() {
  return (
    <Provider store={store}>
      <Navigation 
        linking={{
          enabled: "auto",
          prefixes: [
            // Change the scheme to match your app's scheme defined in app.json
            "native://",
          ],
        }}
        onReady={() => {
          SplashScreen.hideAsync();
        }}
      />
    </Provider>
  );
}
