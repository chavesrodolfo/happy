import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Happy</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#29B6D1',
    alignItems: 'center',
    justifyContent: 'center',
  },

  title: {
    fontSize: 45,
    fontWeight: 'bold',
    color: '#EE3'
  }
});
