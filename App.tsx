import { useCallback, useEffect, useState } from "react";
import { StatusBar, StyleSheet, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator, NativeStackNavigationOptions } from "@react-navigation/native-stack";

import * as SplashScreen from "expo-splash-screen";
import * as Font from "expo-font";
import { Poppins_400Regular, Poppins_500Medium, Poppins_600SemiBold } from "@expo-google-fonts/poppins";
import { IntroScreen } from "./src/screens/IntroScreen";
import { WelcomeScreen } from "./src/screens/WelcomeScreen";
import { LoginScreen } from "./src/screens/LoginScreen";

const fonts = {
  Poppins_400Regular,
  Poppins_500Medium,
  Poppins_600SemiBold,
};

export default function App() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        await SplashScreen.preventAutoHideAsync();
        await Font.loadAsync(fonts);
      } catch (e) {
        console.warn(e);
      } finally {
        setAppIsReady(true);
      }
    })();
  }, []);

  const onLayout = useCallback(() => {
    if (appIsReady) {
      SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  if (!appIsReady) {
    return null;
  }

  const Stack = createNativeStackNavigator();

  const screenOptions: NativeStackNavigationOptions = {
    headerShown: false,
    animation: "slide_from_right",
  };

  const MyTheme = {
    dark: false,
    colors: {
      primary: "rgb(255, 45, 85)",
      background: "#313642",
      card: "rgb(255, 255, 255)",
      text: "rgb(28, 28, 30)",
      border: "rgb(199, 199, 204)",
      notification: "rgb(255, 69, 58)",
    },
  };

  const screenConfig = {
    headerMode: "none",
  };

  return (
    <View style={styles.AppContainer} onLayout={onLayout}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={screenOptions} initialRouteName="Intro">
          <Stack.Screen name="Intro" component={IntroScreen} />
          <Stack.Screen name="WelcomeScreen" component={WelcomeScreen} />
          <Stack.Screen name="LoginScreen" component={LoginScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  AppContainer: {
    flex: 1,
  },
});
