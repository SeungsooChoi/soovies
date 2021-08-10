import React, { useLayoutEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import Movies from "../screens/Movies";
import Tv from "../screens/Tv";
import Search from "../screens/Search";
import Discover from "../screens/Discover";
import { Platform } from "react-native";

const Tabs = createBottomTabNavigator();

const getHeaderName = (route) =>
  getFocusedRouteNameFromRoute(route) || "Movies";

export default ({ navigation, route }) => {
  useLayoutEffect(() => {
    const name = getHeaderName(route);
    navigation.setOptions({ title: name });
  }, [route]);
  return (
    <Tabs.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused }) => {
          let iconName = Platform.OS === "ios" ? "ios-" : "md-";

          switch (route.name) {
            case "Movies":
              iconName += "film";
              break;
            case "Tv":
              iconName += "tv";
              break;
            case "Search":
              iconName += "search";
              break;
            case "Discover":
              iconName += "heart";
              break;
          }

          return (
            <Ionicons
              name={iconName}
              color={focused ? "white" : "gray"}
              size={26}
            />
          );
        },
      })}
      tabBarOptions={{
        style: { backgroundColor: "black", borderTopColor: "black" },
      }}
    >
      <Tabs.Screen name="Movies" component={Movies} />
      <Tabs.Screen name="Tv" component={Tv} />
      <Tabs.Screen name="Search" component={Search} />
      <Tabs.Screen name="Discover" component={Discover} />
    </Tabs.Navigator>
  );
};
