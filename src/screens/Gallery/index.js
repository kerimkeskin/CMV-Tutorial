import React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Gallery = () => {
  const Title = () => {
    return (
      <View style={styles.textWrapper}>
        <Text style={styles.card1Text}>When you wake up</Text>
      </View>
    );
  };
  const Card = ({
    image,
    height,
    backgroundColor,
    style,
    imageStyle,
    text,
  }) => {
    return (
      <View
        style={[
          styles.card2,
          { height: height, backgroundColor: backgroundColor },
          style,
        ]}
      >
        <Title text={text} />
        <Image source={image} style={imageStyle} />
      </View>
    );
  };
  return (
    <View style={styles.container}>
      <View style={{ marginLeft: 28 }}>
        <View style={styles.card1}>
          <Title text />

          <Image
            source={require("../../assets/images/Bitmap.png")}
            style={{
              position: "absolute",
              right: 0,
              top: 60,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Card
            image={require("../../assets/images/card2.png")}
            backgroundColor="#3ED598"
            height={180}
            imageStyle={{
              position: "absolute",
              right: 35,
              bottom: 0,
            }}
          />
          <Card
            image={require("../../assets/images/card3.png")}
            backgroundColor="#FFC542"
            height={210}
            style={{ marginLeft: 19 }}
            imageStyle={{
              position: "absolute",
              left: 26,
              bottom: 0,
            }}
          />
        </View>
        <View style={{ flexDirection: "row" }}>
          <Card
            image={require("../../assets/images/card4.png")}
            backgroundColor="#FF565E"
            height={210}
            style={{ marginTop: -8 }}
            imageStyle={{
              position: "absolute",
              left: 40,
              bottom: 0,
            }}
          />

          {/* <Card
            image={)}
            backgroundColor="#22343C"
            height={210}
            style={{ marginLeft: 19 }}
            imageStyle={{
              position: "absolute",
              top: 0,
            }}
          /> */}
          <View style={[styles.card2, { marginLeft: 19 }]}>
            <Image source={require("../../assets/images/Mask.png")} />
            <TouchableOpacity
              onPress={() => alert("Yeni ürün eklendi")}
              style={styles.addButton}
            >
              <View style={styles.addButtonin}>
                <AntDesign name="plus" size={24} color="#fff" />
              </View>
            </TouchableOpacity>
            <Text style={styles.newItemText}>Add new item</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22343C",
  },
  card1: {
    width: 320,
    height: 180,
    borderRadius: 25,
    backgroundColor: "#FF565E",
    marginTop: 48,
  },
  textWrapper: {
    width: 76,
    height: 40,
    position: "absolute",
    left: 34,
    top: 25,
  },
  card1Text: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  card2: {
    width: 150,
    borderRadius: 25,
    marginTop: 19,
  },
  addButton: {
    width: 60,
    height: 60,
    position: "absolute",
    top: 40,
    left: 45,
    backgroundColor: "#286053",
    borderRadius: 99,
    alignItems: "center",
    justifyContent: "center",
  },
  addButtonin: {
    width: 48,
    height: 48,
    borderRadius: 555,
    backgroundColor: "#3ED598",
    alignItems: "center",
    justifyContent: "center",
  },
  newItemText: {
    position: "absolute",
    bottom: 53,
    textAlign: "center",
    width: "100%",
    fontSize: 14,
    color: "#3ED598",
    fontWeight: "bold",
  },
});

export default Gallery;
