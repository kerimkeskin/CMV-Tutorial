import React from "react";
import { StyleSheet, Text, View, SafeAreaView } from "react-native";

const Home = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text>HOMESCREEN</Text>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22343C",
  },
});

export default Home;
