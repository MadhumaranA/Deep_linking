import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import ScreenA from "./src/screens/ScreenA";
import ScreenB from "./src/screens/ScreenB";
import ScreenC from "./src/screens/ScreenC";
import LinkingScreen from "./src/screens/LinkingScreen";

const Stack = createNativeStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ScreenA" component={ScreenA} />
      <Stack.Screen name="ScreenB" component={ScreenB} />
      <Stack.Screen name="ScreenC" component={ScreenC} />
      <Stack.Screen name="LinkingScreen" component={LinkingScreen} />
    </Stack.Navigator>
  );
}

const config = {
  screens: {
    ScreenA: "a",
    ScreenB: {
      path: "b/:message",
    },
    ScreenC: "c",
  }
}

export default function App() {
  return (
    <NavigationContainer
      linking={{
        prefixes: ["myapp://app"],
        config
      }}
    >
      <MyStack />
    </NavigationContainer>
  );
}