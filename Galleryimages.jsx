import React, { useState } from 'react';
import { View, StatusBar, StyleSheet, Image } from 'react-native';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Button, Text } from 'react-native-paper';
import * as ImagePicker from 'expo-image-picker';

const MediaPicker = () => {

  const [imagePath, setImagePath] = useState(null);
  const insets = useSafeAreaInsets();

  const LunchGallary = async () => {

    const response = await ImagePicker.requestMediaLibraryPermissionsAsync();

    if (!response.granted) {
      alert("Please Give Access to Media");
      return;
    }

    const data = await ImagePicker.launchImageLibraryAsync({
      mediaTypes:"images",
      allowsMultipleSelection: true,
      quality: 1,
    });
    setImagePath(data.assets)
  };

  return (
    <>
      <StatusBar barStyle="light-content" />
      <View style={[styles.statusBar, { height: insets.top }]} />

      <View style={styles.container}>
        <Button mode="contained" onPress={LunchGallary}>
          Tap me!
        </Button>
      </View>

      {
        imagePath
          ? <View>
              {
                imagePath.map((ele, index) => (
                  <Image
                    key={index}
                    source={{ uri: ele.uri }}
                    style={{ width: 200, height: 200, margin: 10 }}
                  />
                ))
              }
            </View>
          : <Text>No Images selected</Text>
      }
    </>
  );
};

const styles = StyleSheet.create({
  statusBar: {
    backgroundColor: '#000',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MediaPicker;