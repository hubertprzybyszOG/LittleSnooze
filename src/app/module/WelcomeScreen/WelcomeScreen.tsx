import { useRouter } from "expo-router";
import { useEffect } from "react";
import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DotPattern from "@/app/components/DotPattern";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import styles from "./WelcomeScreen.styles";

export default function WelcomeScreen() {
  const router = useRouter();

  useEffect(() => {
    const timeout = setTimeout(() => {
      router.replace("/home");
    }, 2000);

    return () => clearTimeout(timeout);
  }, [router]);

  return (
    <ThemedView style={styles.container}>
      <DotPattern style={styles.topLeftDots} dotKeyPrefix="top-left" />
      <DotPattern style={styles.bottomRightDots} dotKeyPrefix="bottom-right" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <ThemedText type="subtitle" style={styles.title}>
            LittleSnooze
          </ThemedText>

          <View>
            <ThemedText style={styles.welcome}>Welcome</ThemedText>
            <ThemedText style={styles.description}>
              Calm bedtime moments for children.
            </ThemedText>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}
