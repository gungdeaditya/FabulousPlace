import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import { name as appName } from "../../../app.json";
import { Platform } from "react-native";

const startTabs = () => {
  Promise.all([
    Icon.getImageSource(Platform.OS === "android" ? "md-map" : "ios-map", 30),
    Icon.getImageSource(
      Platform.OS === "android" ? "md-share-alt" : "ios-share-alt",
      30
    ),
    Icon.getImageSource(Platform.OS === "android" ? "md-menu" : "ios-menu", 30)
  ]).then(source => {
    Navigation.startTabBasedApp({
      tabs: [
        {
          screen: appName + ".FindPlaceScreen",
          label: "Find Place",
          title: "Find Place",
          icon: source[0],
          navigatorButtons: {
            leftButtons: [
              {
                icon: source[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        },
        {
          screen: appName + ".SharePlaceScreen",
          label: "Share Place",
          title: "Share Place",
          icon: source[1],
          navigatorButtons: {
            leftButtons: [
              {
                icon: source[2],
                title: "Menu",
                id: "sideDrawerToggle"
              }
            ]
          }
        }
      ],
      tabsStyle: {
        tabBarSelectedButtonColor: "orange"
      },
      drawer: {
        left: {
          screen: appName + ".SideDrawerScreen"
        }
      },
      appStyle: {
        tabBarSelectedButtonColor: "orange"
      }
    });
  });
};

export default startTabs;
