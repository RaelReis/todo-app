import React from "react";
import { SafeAreaView, StyleSheet, Dimensions, KeyboardAvoidingView, ScrollView } from "react-native";

const { width, height } = Dimensions.get("window");

interface ContainerProps {
  children: React.ReactNode;
}

export const Container: React.FC<ContainerProps> = ({ children }) => {
  return (
      <SafeAreaView style={styles.container}>{children}</SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 0.1,
    maxHeight: height * 0.9,
    marginTop: "auto",
    marginBottom: "auto",
  },
});
