import { router } from "expo-router";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DotPattern from "@/app/components/DotPattern";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import styles from "./HomeScreen.styles";

export default function HomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <DotPattern style={styles.topLeftDots} dotKeyPrefix="top-left" />
      <DotPattern style={styles.bottomRightDots} dotKeyPrefix="bottom-right" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <ThemedText type="subtitle" style={styles.title}>
            LittleSnooze
          </ThemedText>

          <View style={styles.buttonStack}>
            <Pressable
              onPress={() => router.push("/player")}
              style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
            >
              <ThemedText style={styles.buttonText}>Play noise</ThemedText>
            </Pressable>

            <Pressable style={({ pressed }) => [styles.button, styles.secondaryButton, pressed && styles.buttonPressed]}>
              <ThemedText style={[styles.buttonText, styles.secondaryButtonText]}>
                <ThemedText style={styles.favoriteHeart}>♥</ThemedText> Favourite noises
              </ThemedText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}
