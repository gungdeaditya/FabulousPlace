import { Navigation } from "react-native-navigation";
import { Provider } from 'react-redux';

import AuthScreen from "./src/screens/Auth/Auth";
import SharePlaceScreen from "./src/screens/SharePlace/SharePlace";
import FindPlaceScreen from "./src/screens/FindPlace/FindPlace";
import PlaceDetailScreen from "./src/screens/PlaceDetail/PlaceDetail";
import SideDrawerScreen from "./src/screens/SideDrawer/SideDrawer";

import configureStore from "./src/store/configureStore";
import { name as appName } from "./app.json";

const store = configureStore();

//Register Screen
Navigation.registerComponent(
  appName + ".AuthScreen",
  () => AuthScreen,
  store,
  Provider
);
Navigation.registerComponent(
  appName + ".SharePlaceScreen",
  () => SharePlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  appName + ".FindPlaceScreen",
  () => FindPlaceScreen,
  store,
  Provider
);
Navigation.registerComponent(
  appName + ".PlaceDetailScreen",
  () => PlaceDetailScreen,
  store,
  Provider
);
Navigation.registerComponent(
  appName + ".SideDrawerScreen",
  () => SideDrawerScreen
);

//Start a App
Navigation.startSingleScreenApp({
  screen: {
    screen: appName + ".AuthScreen",
    title: "Login"
  }
});
