import * as React from "react";
import { createSwitchNavigator, createAppContainer } from "react-navigation";

import TurnonScreen from './screens/Turn-on Screen';
import RegisterScreen from "./screens/RegisterScreen";
import DashboardScreen from "./screens/DashBoardScreen";
import LoginScreen from "./screens/LoginScreen";

const AppSwitchNavigator = createSwitchNavigator({
  TurnonScreen: TurnonScreen,
  RegisterScreen: RegisterScreen,
  DashboardScreen: DashboardScreen,
  LoginScreen: LoginScreen
});

const AppNavigator = createAppContainer(AppSwitchNavigator);

export default function App() {
  return <AppNavigator />;
}