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
import { ScrollView, TouchableOpacity } from "react-native-gesture-handler";
import { RFValue } from "react-native-responsive-fontsize";
import * as Font from "expo-font";
import AppLoading from "expo-app-loading";
import Ionicons from "react-native-vector-icons/Ionicons";
import { FlatList } from "react-native-gesture-handler";
import ImageCard from "./ImageCard";

let customFonts = {
    "Josefin-Sans": require("../assets/JosefinSans-SemiBold.ttf")
};

export default class HomeScreen extends Component {
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

    renderItem = ({ item: photo }) => {
        return <ImageCard photo={photo} />;
    };

    keyExtractor = (item, index) => index.toString();

    render() {
        if(!this.state.fontsLoaded) {
            return <AppLoading />;
        } else {
            return(
                <View style = {styles.container}>
                    <SafeAreaView />

                    <View style = {styles.gallery}>
                        <FlatList
                            keyExtractor={this.keyExtractor}
                            
                            renderItem={this.renderItem}
                        />
                    </View>

                    <View style = {styles.addPhoto}>
                        <TouchableOpacity
                            onPress = {() =>
                                this.props.navigation.navigate("UploadScreen")
                            }>
                                
                            <Ionicons
                                name = {"add-circle"}
                                size = {RFValue(50)}
                                color = {"purple"}
                                style = {styles.icon}
                            />
                        </TouchableOpacity>
                    </View>
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },

    gallery: {
        flex: 0.85
    },

    appLogo: {
        width: RFValue(100),
        height: RFValue(100),
        resizeMode: "contain"
    },

    addPhoto: {
        alignContent: 'center'
    },

    icon: {
        width: RFValue(10),
        height: RFValue(10)
    }
})