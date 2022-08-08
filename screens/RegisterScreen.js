import React, { Component } from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Button,
  Image,
  TextInput
} from "react-native";
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";

let customFonts = {
    "Josefin-Sans": require("../assets/JosefinSans-SemiBold.ttf")
};

export default class RegisterScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
            fontsLoaded: false
        };
    }
    
    async _loadFontsAsync() {
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }
    
    componentDidMount() {
        this._loadFontsAsync();
    }

    render() {
        if(!this.state.fontsLoaded) {
            return <AppLoading />;
        } 
        else {
            return(
                <View style = {styles.container}>
                    <SafeAreaView/>

                    <View style = {styles.appTitle}>
                        <Image 
                            source={require("../assets/logo.png")}
                            style = {styles.appLogo}
                        />

                        <Text style={styles.appTitleText}>
                            {"CrewPic"}
                        </Text>
                    </View>

                    <View style = {styles.registerForm}>
                        <ScrollView>
                            <Text style = {styles.registerText}>
                                Please complete the fields to register
                            </Text>

                            <TextInput
                                style = {styles.input}
                                placeholder = {"First Name"}
                                placeholderTextColor = {"#B296E6"}
                                autoFocus = {true}
                                textContentType = {"name"}
                            />

                            <TextInput
                                style = {styles.input}
                                placeholder = {"Last Name"}
                                placeholderTextColor = {"#B296E6"}
                                textContentType = {"familyName"}
                            />

                            <TextInput
                                style = {styles.input}
                                placeholder = {"Username"}
                                placeholderTextColor = {"#B296E6"}
                                textContentType = {"username"}
                            />

                            <TextInput
                                style = {styles.input}
                                placeholder = {"Email"}
                                placeholderTextColor = {"#B296E6"}
                                textContentType = {"emailAddress"}
                                keyboardType = {"email-address"}
                            />

                            <TextInput
                                style = {styles.input}
                                placeholder = {"Password"}
                                placeholderTextColor = {"#B296E6"}
                                secureTextEntry = {true}
                                textContentType = {"newPassword"}
                            />

                            <TextInput
                                style = {styles.input}
                                placeholder = {"Password Confirmation"}
                                placeholderTextColor = {"#B296E6"}
                                secureTextEntry = {true}
                                textContentType = {"password"}
                            />

                            <View style = {styles.registerButtonContainer}>
                                <TouchableOpacity
                                    style = {styles.registerButton}
                                    onPress = {() => 
                                        this.props.navigation.navigate("DashboardScreen")
                                    }
                                >
                                    <Text style = {styles.registerButtonText}>
                                        Register
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </ScrollView>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "white"
    },

    registerForm: {
        alignItems:  "center",
        marginTop: 300
    },

    appTitle: {
        flex: 0.4,
        justifyContent: "center",
        alignItems: "center"
    },

    appTitleText: {
        color: "black",
        textAlign: "center",
        fontSize: RFValue(40),
        marginTop: 20,
        fontFamily: "Josefin-Sans"
    },

    appLogo: {
        width: RFValue(100),
        height: RFValue(100),
        resizeMode: "contain",
        marginTop: 200
    },

    registerButtonContainer: {
        justifyContent: 'center',
        alignItems: 'center'
    },

    registerButtonText: {
        color: "white",
        fontSize: RFValue(15),
        fontFamily: "Josefin-Sans"
    },

    registerText: {
        color: "black",
        textAlign: "center",
        fontSize: RFValue(20),
        fontFamily: "Josefin-Sans"
    },

    input: {
        height: RFValue(20),
        borderColor: "white",
        borderWidth: RFValue(1),
        borderRadius: RFValue(10),
        color: "#645384",
        marginTop: 30,
        fontFamily: "Josefin-Sans",
        textAlign: 'center'
    },

    registerButton: {
        borderRadius: 50,
        backgroundColor: "#8c4fff",
        width: RFValue(200),
        height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40
    }
})