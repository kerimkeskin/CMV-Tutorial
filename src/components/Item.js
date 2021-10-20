import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Item = ({ item }) => {
  const getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };
  return (
    <View style={styles.itemContainer}>
      <View
        style={[styles.profileImage, { backgroundColor: getRandomColor() }]}
      ></View>
      <View style={styles.box}>
        <Text style={styles.name}>{item?.address.city}</Text>
        <Text style={[styles.name, { fontSize: 14, color: "#96A7AF" }]}>
          {item?.phone}
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  name: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
    marginLeft: 15,
  },
  profileImage: {
    width: 80,
    height: 80,
    borderRadius: 999,
    backgroundColor: "red",
  },
  itemContainer: {
    alignSelf: "center",
    marginTop: 15,
    height: 80,
    width: 375,
    flexDirection: "row",
  },
  box: {
    height: "100%",
    width: 295,
  },
});

export default Item;
