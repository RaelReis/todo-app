import axios from "axios";
import { useState } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/UI/Button";
import { Container } from "../components/UI/Container";
import { Input } from "../components/UI/Input";
import { Separator } from "../components/UI/Separator";
import { responsiveFont } from "../styles/responsiveFont";

let { height } = Dimensions.get("window");

height = height * 0.9; // 90% is the height of container

export const LoginScreen = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {};

  return (
    <Container>
      <View style={{ flex: 1 }}>
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Sign In </Text>
          <Text style={[styles.titleText, styles.brandText]}>taskdoo</Text>
        </View>
        <View style={styles.inputWrapper}>
          <Input placeholder="Username" value={username} onChangeText={setUsername} />
          <Input placeholder="Password" value={password} onChangeText={setPassword} />
        </View>
        <Separator style={styles.separator} />
        <View style={styles.moreLoginOptionsWrapper}>
          <TouchableOpacity onPress={() => console.log("a")} style={styles.googleButton}>
            <Image
              resizeMode="contain"
              source={require("../assets/images/google_icon.png")}
              style={styles.googleImage}
            />
            <Text style={styles.googleText}>Sign in with Google</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonWrapper}>
          <Button onPress={handleLogin}>Login</Button>
          <TouchableOpacity style={styles.signUpButton}>
            <Text style={styles.createAccountText}>
              Don't have account ?<Text style={styles.highLight}> Sign Up</Text>
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    maxHeight: height * 0.25,
  },
  titleText: {
    fontSize: responsiveFont.giga,
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },
  brandText: {
    color: "#F65751",
  },
  inputWrapper: {
    height: height * 0.3,
  },
  separator: {
    height: height * 0.1,
  },
  moreLoginOptionsWrapper: {
    height: height * 0.2,
  },
  googleButton: {
    marginTop: "auto",
    marginBottom: "auto",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#Fff",
    borderRadius: 10,
    paddingVertical: height * 0.02,
    paddingHorizontal: height * 0.015,
  },
  googleImage: {
    width: "20%",
    height: "100%",
  },
  googleText: {
    fontSize: responsiveFont.medium,
    color: "#000",
    fontFamily: "Poppins_500Medium",
  },
  buttonWrapper: {
    height: height * 0.2,
  },
  signUpButton: {
    alignItems: "center",
    justifyContent: "center",
  },
  createAccountText: {
    color: "#fff",
    fontFamily: "Poppins_400Regular",
    marginTop: 15,
  },
  highLight: {
    marginLeft: 5,
    fontSize: responsiveFont.tiny,
    fontFamily: "Poppins_400Regular",
    color: "#F65751",
  },
});
