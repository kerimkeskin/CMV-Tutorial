// In Navigator.js in a new project

import * as React from "react";
import { View, Text, Dimensions } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Welcome from "../screens/Welcome";
import Home from "../screens/Home";
import Gallery from "../screens/Gallery";

const Stack = createNativeStackNavigator();

function Navigator() {
  const headerConfig = {
    headerShown: true,
    headerBackTitleVisible: false,
    headerStyle: {
      backgroundColor: "#22343C",
      height: Dimensions.get("screen").height * 0.14,
    },
    headerTitleStyle: {
      fontSize: 18,
      color: "#fff",
    },
    headerLeftContainerStyle: { width: "100%" },
    headerTintColor: "#fff",
  };
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen
          options={{
            headerShown: false,
          }}
          name="Welcome"
          component={Welcome}
        />
        <Stack.Screen
          options={{ ...headerConfig, title: "Ana Sayfa" }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{ ...headerConfig, title: "Galeri" }}
          name="Gallery"
          component={Gallery}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Navigator;
