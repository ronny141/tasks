import React from 'react';
import { Button } from '@react-navigation/elements';
import { StyleSheet, View } from 'react-native';

export function Home() {
  return (
    <View style={styles.container}>
      <Button testID='tasks-id' screen="Tasks">
        Tasks
      </Button>
      <Button testID='list-id' screen="List">List</Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: 10,
  },
});
