import { ExpoCameraView } from "expo-camera-view";
import { ResizeMode, Video } from "expo-av";
import { OnSavedVideoEvent } from "expo-camera-view/ExpoCameraView";
import { useState } from "react";
import { StyleSheet, SafeAreaView, Pressable, Text, View } from "react-native";
import Animated, {
  SlideInLeft,
  SlideInRight,
  SlideOutLeft,
  SlideOutRight,
} from "react-native-reanimated";

export default function App() {
  const [recording, setRecording] = useState(false);
  const [fileURL, setFileURL] = useState<string | null>("");

  function onSavingVideo() {}

  function onSavedVideo(args: OnSavedVideoEvent) {
    setFileURL(args.nativeEvent.fileURL);
  }

  function toggleRecording() {
    setRecording(!recording);
  }

  function goBack() {
    setFileURL(null);
  }

  return (
    <SafeAreaView style={styles.container}>
      {!fileURL && (
        <Animated.View
          style={styles.innerContainer}
          entering={SlideInLeft}
          exiting={SlideOutLeft}
        >
          <ExpoCameraView
            isRecording={recording}
            onSavingVideo={onSavingVideo}
            onSavedVideo={onSavedVideo}
            style={styles.camera}
          />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={toggleRecording}>
              <Text>{recording ? "Stop" : "Start"} recording</Text>
            </Pressable>
          </View>
        </Animated.View>
      )}

      {fileURL && (
        <Animated.View
          style={styles.innerContainer}
          entering={SlideInRight}
          exiting={SlideOutRight}
        >
          <Video
            source={{ uri: fileURL }}
            style={styles.video}
            resizeMode={ResizeMode.CONTAIN}
            shouldPlay
            isLooping
          />

          <View style={styles.buttonContainer}>
            <Pressable style={styles.button} onPress={goBack}>
              <Text>Go back</Text>
            </Pressable>
          </View>
        </Animated.View>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    gap: 16,
  },
  innerContainer: {
    flex: 1,
  },
  camera: {
    flex: 1,
  },
  video: {
    flex: 1,
  },
  buttonContainer: {
    padding: 16,
  },
  button: {
    borderWidth: 1,
    borderColor: "black",
    padding: 16,
  },
});
