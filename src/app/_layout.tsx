import { Fredoka_600SemiBold } from "@expo-google-fonts/fredoka";
import { useFonts } from "expo-font";
import { DefaultTheme, Stack, ThemeProvider } from "expo-router";

import { Colors } from "@/constants/theme";

const eInkNavigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: Colors.text,
    background: Colors.background,
    card: Colors.backgroundElement,
    text: Colors.text,
    border: Colors.text,
    notification: Colors.backgroundSelected,
  },
};

export default function TabLayout() {
  const [loaded, error] = useFonts({
    Lato: require("@/assets/fonts/Lato-Regular.ttf"),
    "Lato-Italic": require("@/assets/fonts/Lato-Italic.ttf"),
    "Lato-Thin": require("@/assets/fonts/Lato-Thin.ttf"),
    "Lato-ThinItalic": require("@/assets/fonts/Lato-ThinItalic.ttf"),
    "Lato-Light": require("@/assets/fonts/Lato-Light.ttf"),
    "Lato-LightItalic": require("@/assets/fonts/Lato-LightItalic.ttf"),
    "Lato-Bold": require("@/assets/fonts/Lato-Bold.ttf"),
    "Lato-BoldItalic": require("@/assets/fonts/Lato-BoldItalic.ttf"),
    "Lato-Black": require("@/assets/fonts/Lato-Black.ttf"),
    "Lato-BlackItalic": require("@/assets/fonts/Lato-BlackItalic.ttf"),
    "Fredoka-SemiBold": Fredoka_600SemiBold,
  });

  if (!loaded && !error) {
    return null;
  }

  return (
    <ThemeProvider value={eInkNavigationTheme}>
      <Stack>
        <Stack.Screen name="index" options={{ headerShown: false }} />
        <Stack.Screen name="home" options={{ headerShown: false }} />
        <Stack.Screen name="player" options={{ headerShown: false }} />
      </Stack>
    </ThemeProvider>
  );
}
