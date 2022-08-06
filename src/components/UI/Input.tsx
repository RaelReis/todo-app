import { FC, useRef, useState } from "react";
import { Dimensions, StyleSheet, Text, TextInput, TextInputProps, View } from "react-native";
import { responsiveFont } from "../../styles/responsiveFont";

type InpupProps = {
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const { height } = Dimensions.get("window");

export const Input: FC<InpupProps> = ({ placeholder, value, onChangeText }) => {
  const [isFocused, setIsFocused] = useState(false);

  const input = useRef<TextInputProps>(null);

  return (
    <View style={styles.inputWrapper}>
      {!isFocused && value.length <= 0 && <Text style={styles.customPlaceHolder}>{placeholder}</Text>}

      <TextInput
        style={styles.input}
        value={value}
        onChangeText={(text) => onChangeText(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputWrapper: {
    position: "relative",
    borderRadius: 10,
    marginTop: "auto",
    marginBottom: "auto",
  },
  customPlaceHolder: {
    position: "absolute",
    top: 13,
    left: 20,
    color: "#8d8d8d",
    fontSize: responsiveFont.large,
    zIndex: -1,
  },

  input: {
    fontSize: responsiveFont.large,
    color: "#fff",
    backgroundColor: "rgba(255, 255, 255, 0.09)",
    borderRadius: 10,
    paddingVertical: 15,
    paddingHorizontal: 20,
  },
});
