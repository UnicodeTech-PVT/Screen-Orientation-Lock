import { StatusBar } from "expo-status-bar";
import { useEffect } from "react";
import { Button, StyleSheet, Text, View } from "react-native";
import * as ScreenOrientation from "expo-screen-orientation";

export default function App() {
  useEffect(() => {
    ScreenOrientation.unlockAsync();
    const listener = ScreenOrientation.addOrientationChangeListener((event) => {
      console.log(event.orientationInfo);
    });

    return () => {
      listener.remove();
    };
  }, []);

  return (
    <View style={styles.container}>
      <Text>Hello, world!</Text>
      <Button
        title="Lock to portrait"
        onPress={() => {
          ScreenOrientation.lockPlatformAsync({
            screenOrientationArrayIOS: [
              ScreenOrientation.Orientation.PORTRAIT_UP,
            ],
          });
        }}
      />
      <Button
        title="Lock to landscape"
        onPress={() => {
          ScreenOrientation.lockPlatformAsync({
            screenOrientationArrayIOS: [
              ScreenOrientation.Orientation.LANDSCAPE_LEFT,
              ScreenOrientation.Orientation.LANDSCAPE_RIGHT
            ],
          });
        }}
      />
      <Button title="Unlock" onPress={() => ScreenOrientation.unlockAsync()} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
