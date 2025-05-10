import React from "react";
import { ScrollView, StyleSheet, View, Image, Text } from "react-native";
import { useTasks } from "../../hooks/useTasks";

export function List() {
  const { fakeData } = useTasks();
  console.log(fakeData);
  return (
    <View style={styles.container}>
      <ScrollView>
        {fakeData.map((task, index) => (
          <View style={styles.content} key={`${task}-${index}`}>
            <Image
                source={{ uri: task.avatar }}
                style={styles.avatar}
            />
            <Text>{task.name}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  content: {
    flexDirection: "row",  
    flex: 1,
    width: "100%",
  },
  avatar: {
    // backgroundColor: "red",
    width: 100,
    height: 100,
    borderRadius: 50, // circular
  },
});