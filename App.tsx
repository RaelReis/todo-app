import { useCallback } from "react";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";

import { ThemeProvider } from "styled-components/native";
import { defaultTheme } from "./src/styles/themes/defaultTheme";
import { Root } from "./src/styles/root";
import { Router } from "./src/routes/Router";

const fonts = {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
};

export default function App() {
  const [fontsLoaded] = Font.useFonts(fonts);

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded) {
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (
    <ThemeProvider theme={defaultTheme}>
      <Root onLayout={onLayoutRootView}>
        <Router />
      </Root>
    </ThemeProvider>
  );
}
