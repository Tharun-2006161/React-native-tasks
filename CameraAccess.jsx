import React, { useState, useRef } from "react";
import { View, Image } from "react-native";
import { Button, Text } from "react-native-paper";
import { CameraView, useCameraPermissions } from "expo-camera";
import * as Sharing from "expo-sharing";

const CameraAccess = () => {

  const Frames = useRef(null);
  const [ImagePath, setImagePath] = useState(null);

  const [permission, RequestCamAccess] = useCameraPermissions();

  if (!permission) {
    return <Text>Loading</Text>;
  }

  if (!permission.granted) {
    return (
      <Button onPress={RequestCamAccess}>
        Request Camera Access
      </Button>
    );
  }

  const Capture = async () => {
    if (Frames.current) {
      const Picture = await Frames.current.takePictureAsync();
      setImagePath(Picture.uri);
    }
  };

  const Share = async () => {
    const Permission = await Sharing.isAvailableAsync();

    if (Permission && ImagePath) {
      await Sharing.shareAsync(ImagePath);
    }
  };

  return (
    <View>
      <CameraView
        style={{ width: "100%", height: 300 }}
        facing="back"
        ref={Frames}
      />

      <Button onPress={Capture}>Take Picture</Button>

      {ImagePath
        ? <Image source={{ uri: ImagePath }} style={{ width: 200, height: 200 }} />
        : <Text>No Captured Image</Text>
      }

      <Button onPress={Share}>Share</Button>
    </View>
  );
};

export default CameraAccess;