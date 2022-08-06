import { FC } from "react";
import { StyleSheet, Text, View } from "react-native";
import { responsiveFont } from "../../styles/responsiveFont";

type SeparatorProps = {
  style?: any;
};

export const Separator: FC<SeparatorProps> = ({ style }) => {
  return (
    <View style={[styles.separatorWrapper, style]}>
      <View style={styles.separator} />
      <Text style={styles.separatorText}>or</Text>
      <View style={styles.separator} />
    </View>
  );
};

const styles = StyleSheet.create({
  separatorWrapper: {
    flexDirection: "row",
    alignItems: "center",
  },
  separator: {
    height: 1,
    flex: 1,
    width: "100%",
    backgroundColor: "#F65751",
  },
  separatorText: {
    color: "#F65751",
    paddingHorizontal: 20,
    fontSize: responsiveFont.medium,
  },
});
