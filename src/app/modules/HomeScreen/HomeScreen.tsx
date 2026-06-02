import { router } from "expo-router";
import { Pressable, View } from "react-native";

import PatternedScreen from "@/components/PatternedScreen";
import { ThemedText } from "@/components/themed-text";
import styles from "./HomeScreen.styles";

export default function HomeScreen() {
  return (
    <PatternedScreen>
      <View style={styles.content}>
        <ThemedText type="subtitle" style={styles.title}>
          LittleSnooze
        </ThemedText>

        <View style={styles.buttonStack}>
          <Pressable
            onPress={() => router.push("/player")}
            style={({ pressed }) => [
              styles.button,
              pressed && styles.buttonPressed,
            ]}
          >
            <ThemedText style={styles.buttonText}>Play noise</ThemedText>
          </Pressable>

          <Pressable
            onPress={() => router.push("/favorites")}
            style={({ pressed }) => [
              styles.button,
              styles.secondaryButton,
              pressed && styles.buttonPressed,
            ]}
          >
            <ThemedText style={[styles.buttonText, styles.secondaryButtonText]}>
              <ThemedText style={styles.favoriteHeart}>♥</ThemedText>{" "}
              Favourite noises
            </ThemedText>
          </Pressable>
        </View>
      </View>
    </PatternedScreen>
  );
}
