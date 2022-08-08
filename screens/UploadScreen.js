import { View, Text, StyleSheet, TouchableOpacity, SafeAreaView, Alert, Image } from 'react-native'
import { RFValue } from "react-native-responsive-fontsize";
import Ionicons from "react-native-vector-icons/Ionicons";
import * as ImagePicker from 'expo-image-picker';
import  { firebase } from '../config'
import React, { useState,  } from 'react'


const UploadScreen = () => {
    const [image, setImage] = useState(null);
    const [uploading, setUploading] = useState(false);

    const pickImage = async () => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });
    
        const source = { uri: result.uri };
        console.log(source);
        setImage(source);

    };

    const uploadImage = async () => {
      setUploading(true);
      const response = await fetch(image.uri)
      const blob = await response.blob();
      const filename = image.uri.substring(image.uri.lastIndexOf('/') + 1);
      var ref = firebase.storage().ref().child(filename).put(blob);

      try {
        await ref;
      } catch (e) {
        console.error(e);
      }
      setUploading(false);
      Alert.alert(
        'Photo uploaded!!!',
      );
      setImage(null);
    };

  return (
    <SafeAreaView style={styles.container}>
                        <TouchableOpacity
                            onPress = {() =>
                                this.props.navigation.navigate("HomeScreen")
                            }>
                                
                            <Ionicons
                                name = {"arrow-back"}
                                size = {RFValue(50)}
                                color = {"purple"}
                                style = {styles.icon}
                            />
                        </TouchableOpacity>
                    
      <TouchableOpacity style={styles.selectButton} onPress={pickImage}>
        <Text style={styles.buttonText}>Pick an image</Text>
      </TouchableOpacity>
      
      <View style={styles.imageContainer}>
      {image && <Image source={{ uri: image.uri }} style={{ width: 300, height: 300 }} />}
      
      <TouchableOpacity style={styles.uploadButton} onPress={uploadImage}>
        <Text style={styles.buttonText}>Upload image</Text>
      </TouchableOpacity>
        
        
      </View>
    </SafeAreaView>
  )
}

export default UploadScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#000',
      justifyContent:'center'
    },
    selectButton: {
      borderRadius: 5,
      width: 150,
      height: 50,
      backgroundColor: 'blue',
      alignItems: 'center',
      justifyContent: 'center'
    },
    uploadButton: {
      borderRadius: 5,
      width: 150,
      height: 50,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: 20
    },
    buttonText: {
      color: 'white',
      fontSize: 18,
      fontWeight: 'bold'
    },
    imageContainer: {
      marginTop: 30,
      marginBottom: 50,
      alignItems: 'center'
    },

    
});