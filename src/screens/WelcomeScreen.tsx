import { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, View } from "react-native";
import { Button } from "../components/UI/Button";
import { Container } from "../components/UI/Container";
import { responsiveFont } from "../styles/responsiveFont";

const { width } = Dimensions.get("window");

type WelcomeScreenProps = {
  navigation: any;
};

export const WelcomeScreen: FC<WelcomeScreenProps> = ({ navigation }) => {
  return (
    <Container>
      <View style={styles.welcomeBox}>
        <Text style={styles.welcomeTitle}>Welcome to</Text>
        <Text style={[styles.welcomeTitle, styles.brandText]}> taskdoo</Text>
        <Text style={styles.welcomeText}>Please Login to your account or Create new account to continue</Text>
      </View>
      <View style={styles.imageWrapper}>
        <Image resizeMode="contain" style={styles.image} source={require("../assets/images/welcome.png")} />
      </View>

      <View style={styles.buttonWrapper}>
        <Button onPress={() => navigation.navigate("LoginScreen")}>Login</Button>
        <Button style={styles.createAccountButton} onPress={() => {}}>
          Create account
        </Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  welcomeBox: {
    flex: 0.3,
  },
  welcomeTitle: {
    textAlign: "center",
    fontSize: responsiveFont.xxxxxlarge,
    fontFamily: "Poppins_500Medium",
    color: "#fff",
  },
  welcomeText: {
    marginVertical: 10,
    textAlign: "center",
    fontSize: responsiveFont.small,
    fontFamily: "Poppins_400Regular",
    color: "#E2E2E2",
  },
  imageWrapper: {
    flex: 0.4,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: width * 0.03,
  },
  image: {
    width: "100%",
    height: "100%",
  },
  brandText: {
    color: "#F65751",
  },
  buttonWrapper: {
    flex: 0.3,
  },
  createAccountButton: {
    marginTop: 20,
    borderWidth: 3,
    borderColor: "#F65751",
    backgroundColor: "transparent",
  },
});
