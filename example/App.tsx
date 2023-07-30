import { StyleSheet, Text, View } from 'react-native';

import * as ExpoCameraView from 'expo-camera-view';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>{ExpoCameraView.hello()}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
