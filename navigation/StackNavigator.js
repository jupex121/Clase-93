import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import TabNavigator from "./TabNavigator";
import UploadScreen from "../screens/UploadScreen";

const Stack = createStackNavigator();

const StackNavigator = () => {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name="HomeScreen" component={TabNavigator} />
      <Stack.Screen name="UploadScreen" component={UploadScreen} />
    </Stack.Navigator>
  );
};

export default StackNavigator;
