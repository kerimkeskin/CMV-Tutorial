import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Item = ({ item }) => {
  return (
    <View style={styles.itemContainer}>
      <View style={styles.profileImage}></View>
      <View style={styles.box}>
        <Text style={styles.name}>{item?.address.city}</Text>
        <Text style={[styles.name, { fontSize: 14, color: "#96A7AF" }]}>
          {item?.company.catchPhrase}
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
    backgroundColor: "green",
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
