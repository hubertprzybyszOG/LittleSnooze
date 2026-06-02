import { View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { styles } from "./WelcomeScreen.styles";
import { HALFTONE_DOTS } from "./WelcomeScreen.utils";

export default function WelcomeScreen() {
  return (
    <ThemedView style={styles.container}>
      <View
        style={[styles.dotCircle, styles.topLeftDots]}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        {HALFTONE_DOTS.map((dot, index) => (
          <View
            key={`top-left-${index}`}
            style={[
              styles.dot,
              {
                width: dot.size,
                height: dot.size,
                borderRadius: dot.size / 2,
                left: dot.x,
                top: dot.y,
              },
            ]}
          />
        ))}
      </View>
      <View
        style={[styles.dotCircle, styles.bottomRightDots]}
        accessibilityElementsHidden
        importantForAccessibility="no-hide-descendants"
      >
        {HALFTONE_DOTS.map((dot, index) => (
          <View
            key={`bottom-right-${index}`}
            style={[
              styles.dot,
              {
                width: dot.size,
                height: dot.size,
                borderRadius: dot.size / 2,
                left: dot.x,
                top: dot.y,
              },
            ]}
          />
        ))}
      </View>

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
