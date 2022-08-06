import { Children, FC } from "react";
import { Dimensions, StyleSheet, Text, TouchableOpacity } from "react-native";
import { responsiveFont } from "../../styles/responsiveFont";

const { height } = Dimensions.get("window");

type WelcomeScreenProps = {
  children: React.ReactNode;
  onPress: () => void;
  style?: any;
};

export const Button: FC<WelcomeScreenProps> = ({ children, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.button, style]} onPress={onPress}>
      <Text style={styles.buttonText}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 'auto',
    paddingVertical: height * 0.015,
    backgroundColor: "#F65751",
    alignItems: "center",
    borderRadius: 10,
  },
  buttonText: {
    fontSize: responsiveFont.xlarge,
    color: "#fff",
    fontFamily: "Poppins_400Regular",
  },
});
