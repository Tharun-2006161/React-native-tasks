import React, { useState } from "react";
import { Button } from "react-native-paper";
import { View, Image, StyleSheet } from "react-native";
import * as ImagePicker from "expo-image-picker";

const Sharesheet = () => {

  const [image, setImage] = useState(null);

  const Choose = async () => {

    const response = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!response.granted) {
      alert("Permission to access gallery is required!");
      return;
    }

    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      quality: 1,
    });

    if (!result.canceled) {
      setImage(result.assets[0].uri);
    }
  };

  const Transfer = () =>{
    if (image){
      alert("Transfer Successful");
      setImage(null);
    }else{
      alert("No image Selected")
    }
  }
  return (
    <View style={styles.container}>
      <Button mode="contained" onPress={Choose}>
        Choose Image
      </Button>

      {image && (
        <Image source={{ uri: image }} style={styles.image} />
      )}
      <Button mode="contained" onPress={Transfer}>Delete</Button>
    </View>
  );
};

export default Sharesheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap:10,
  },
  image: {
    width: 200,
    height: 200,
    marginTop: 20,
  },
});