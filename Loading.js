import React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function Loading() {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.text}>Loading</Text>
      </View>
      <View>
        <Text style={styles.text}>Weather...</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
    paddingHorizontal: 30,
    paddingVertical: 100,
    backgroundColor: "#fdf6aa",
  },
  text: {
    color: "#2c2c2c",
    fontSize: 35,
    marginLeft: 20,
  },
});
