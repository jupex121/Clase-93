import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import StackNavigator from "../navigation/StackNavigator";

export default function DashboardScreen() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}
