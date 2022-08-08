import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Platform,
  StatusBar,
  Image,
  Dimensions
} from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

let customFonts = {
    "Josefin-Sans": require("../assets/JosefinSans-SemiBold.ttf")
};

export default class ProfileScreen extends Component {
    render() {
        return(
            <View>
                <Text>
                    profile Screen
                </Text>
            </View>
        )
    }
}