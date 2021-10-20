import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, FlatList } from "react-native";
import Button from "../../components/Button";
import * as services from "../../core/requests";
import Item from "../../components/Item";

const Home = ({ navigation }) => {
  const [data, setData] = useState([]);

  const getUsers = () => {
    services
      .getData()
      .then((res) => {
        setData(res);
        console.log("res", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={{ width: "75%", alignSelf: "center" }}>
        <Button
          label="Galeri"
          backgroundColor="purple"
          onPress={() => navigation.navigate("Gallery")}
        />
      </View>
      <View style={{ width: "100%" }}>
        <FlatList
          data={data}
          keyExtractor={(item) => item?.id?.toString()}
          renderItem={({ item }) => <Item item={item} />}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22343C",
  },
  buttonWrapper: {
    width: "70%",
    alignSelf: "center",
    marginTop: 15,
  },
  count: {
    color: "#fff",
    fontSize: 25,
    textAlign: "center",
    marginTop: 16,
  },
});

export default Home;
