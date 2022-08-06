import { FC } from "react";
import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Button } from "../components/UI/Button";
import { Container } from "../components/UI/Container";
import { responsiveFont } from "../styles/responsiveFont";

const { width, height } = Dimensions.get("window");

interface IntroScreenProps {
  navigation: any;
}

export const IntroScreen: FC<IntroScreenProps> = ({ navigation }) => {
  const handleButton = () => {
    navigation.navigate("WelcomeScreen");
  };

  return (
    <Container>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>
          Manage your tasks & everything with <Text style={styles.appTitle}>taskdoo</Text>
        </Text>
      </View>
      <View style={styles.introImageWrapper}>
        <Image resizeMode="contain" style={styles.introImage} source={require("../assets/images/intro.png")} />
      </View>
      <View style={styles.descriptionWrapper}>
        <Text style={styles.description}>Write all your task to one note, don't let</Text>
        <Text style={styles.description}>your day do nothing</Text>
      </View>
      <View style={styles.buttonWrapper}>
        <Button onPress={handleButton}>Let's start</Button>
      </View>
    </Container>
  );
};

const styles = StyleSheet.create({
  titleWrapper: {
    flex: 0.3,
  },
  title: {
    fontSize: responsiveFont.xxxxxlarge,
    color: "#fff",
    fontFamily: "Poppins_500Medium",
  },
  appTitle: {
    fontSize: 36,
    color: "#F65751",
  },
  introImageWrapper: {
    flex: 0.4,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: width * 0.03,
  },
  introImage: {
    width: "100%",
    height: "100%",
  },
  descriptionWrapper: {
    flex: 0.1,
    marginVertical: 15,
  },
  description: {
    fontSize: responsiveFont.small,
    color: "#DBDBDB",
    fontFamily: "Poppins_400Regular",
  },
  buttonWrapper: {
    flex: 0.2,
  },
});
