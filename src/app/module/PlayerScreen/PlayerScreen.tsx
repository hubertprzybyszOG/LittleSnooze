import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DotPattern from "@/app/components/DotPattern";
import { ThemedView } from "@/components/themed-view";
import styles from "./PlayerScreen.styles";

export default function PlayerScreen() {
  return (
    <ThemedView style={styles.container}>
      <DotPattern style={styles.topLeftDots} dotKeyPrefix="top-left" />
      <DotPattern style={styles.bottomRightDots} dotKeyPrefix="bottom-right" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}></View>
      </SafeAreaView>
    </ThemedView>
  );
}
