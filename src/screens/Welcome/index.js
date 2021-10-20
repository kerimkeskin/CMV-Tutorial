import React from "react";
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  Image,
  TouchableOpacity,
} from "react-native";
import { AntDesign } from "@expo/vector-icons";

const Welcome = ({ navigation }) => {
  const TextInputBox = ({ icon }) => {
    return (
      <View style={styles.usernameWrapper}>
        <View style={styles.icon}>
          <Image source={icon} height={54} width={54} />
        </View>
        <TextInput
          style={styles.input}
          // onChangeText={onChangeText}
          // value={text}
        />
      </View>
    );
  };
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.box}>
        <View style={styles.headerBox}></View>

        <View style={styles.title}>
          <Text style={styles.titleText}>Welcome!</Text>
          <Text style={styles.subTitleText}>Sign in to continue</Text>
        </View>
        <TextInputBox icon={require("../../assets/images/Icon.png")} />
        <TextInputBox icon={require("../../assets/images/pass.png")} />

        <TouchableOpacity
          onPress={() => navigation.navigate("Home")}
          style={styles.buttonWrapper}
        >
          <Text style={styles.signinText}>Sign in</Text>
          <AntDesign
            style={{ marginLeft: 5 }}
            name="arrowright"
            size={20}
            color="#fff"
          />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#22343C",
  },
  box: {
    width: "85%",
    height: "80%",
    alignSelf: "center",
    marginTop: "25%",
  },
  headerBox: {
    width: 45,
    height: 45,
    backgroundColor: "#40DF9F",
    borderRadius: 12,
  },
  title: {
    width: "100%",
    marginTop: 28,
  },
  titleText: {
    color: "#fff",
    fontSize: 42,
    fontWeight: "bold",
  },
  subTitleText: {
    color: "#96A7AF",
    fontSize: 24,
    marginTop: 9,
  },
  usernameWrapper: {
    width: "100%",
    height: 54,
    marginTop: 37,
    flexDirection: "row",
  },
  icon: {
    height: 54,
  },
  input: {
    height: 54,
    backgroundColor: "#22343C",
    width: "90%",
    color: "#96A7AF",
    marginLeft: 5,
  },
  buttonWrapper: {
    width: "100%",
    height: 58,
    backgroundColor: "#40DF9F",
    marginTop: 64,
    borderRadius: 12,
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
  },
  signinText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default Welcome;
