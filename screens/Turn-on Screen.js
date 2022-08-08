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

export default class TurnonScreen extends Component {
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

                    <View style = {styles.startContainer}>
                        <TouchableOpacity 
                            style = {styles.registerButton}
                            onPress = {() =>
                                this.props.navigation.navigate("RegisterScreen")
                            }
                        >
                            <Text style = {styles.registerButtonText}>
                                Get Started
                            </Text>
                        </TouchableOpacity>

                        <Text style = {styles.logInText}>
                            Already have an account?
                        </Text>

                        <TouchableOpacity
                            style = {styles.logInButton}
                            onPress = {() =>
                                this.props.navigation.navigate("LoginScreen")}
                        >
                            Sign In
                        </TouchableOpacity>
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

    startContainer: {
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

    registerButton: {
        borderRadius: 50,
        backgroundColor: "#B296E6",
        width: RFValue(200),
        height: RFValue(40),
        justifyContent: 'center',
        alignItems: 'center'
    },

    registerButtonText: {
        color: "white",
        fontSize: RFValue(15),
        fontFamily: "Josefin-Sans"
    },

    logInText: {
        color: "black",
        fontSize: RFValue(10),
        fontFamily: "Josefin-Sans",
        marginTop: 20
    },

    logInButton: {
        color: "purple",
        fontSize: RFValue(10),
        fontFamily: "Josefin-Sans",
        marginTop: 10
    }
})