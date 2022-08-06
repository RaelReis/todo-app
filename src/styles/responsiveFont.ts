import { PixelRatio, Dimensions, Platform } from "react-native";

const { width } = Dimensions.get("window");

const scale = width / 320;

const normalize = (size: number) => {
  const newSize = size * scale;

  if (Platform.OS === "ios") {
    return Math.round(PixelRatio.roundToNearestPixel(newSize));
  } else {
    return Math.round(PixelRatio.roundToNearestPixel(newSize)) - 2;
  }
};

export const responsiveFont = {
  tiny: normalize(12),
  small: normalize(14),
  medium: normalize(16),
  large: normalize(18),
  xlarge: normalize(20),
  xxlarge: normalize(22),
  xxxlarge: normalize(24),
  xxxxlarge: normalize(26),
  xxxxxlarge: normalize(28),
  giga: normalize(34)
};
