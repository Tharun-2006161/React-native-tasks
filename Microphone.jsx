import React, { useState } from "react";
import { View } from "react-native";
import { Button } from "react-native-paper";
import { Audio } from "expo-av";

const Microphone = () => {

  const [recording, setRecording] = useState(null);
  const [uri, setUri] = useState(null);

  const Record = async () => {
    try {

      if (recording) {
        console.log("Already recording");
        return;
      }

      const permission = await Audio.requestPermissionsAsync();

      if (!permission.granted) {
        alert("Microphone permission denied");
        return;
      }

      await Audio.setAudioModeAsync({
        allowsRecordingIOS: true,
        playsInSilentModeIOS: true,
      });

      const { recording: newRecording } =
        await Audio.Recording.createAsync(
          Audio.RecordingOptionsPresets.HIGH_QUALITY
        );

      setRecording(newRecording);

      console.log("Recording started");

    } catch (err) {
      console.log(err);
    }
  };

  const StopRec = async () => {
    try {

      if (!recording) {
        console.log("No recording running");
        return;
      }

      await recording.stopAndUnloadAsync();

      const recordedUri = recording.getURI();

      console.log("Saved at:", recordedUri);

      setUri(recordedUri);

      setRecording(null);

    } catch (err) {
      console.log(err);
    }
  };

  const Play = async () => {
    try {

      if (!uri) {
        console.log("No recording available");
        return;
      }

      const { sound } = await Audio.Sound.createAsync({ uri });

      await sound.playAsync();

      console.log("Playing recording");

    } catch (err) {
      console.log(err);
    }
  };

  return (
    <View style={{ flex:1, justifyContent:"center", alignItems:"center", gap:10 }}>

      <Button mode="contained" onPress={Record}>
        Start Recording
      </Button>

      <Button mode="contained" onPress={StopRec}>
        Stop Recording
      </Button>

      <Button mode="contained" onPress={Play}>
        Play Recording
      </Button>

    </View>
  );
};

export default Microphone;