import { type ReactNode } from "react";
import { type StyleProp, type ViewStyle } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { ThemedView } from "@/components/themed-view";
import DotPattern from "../DotPattern";
import { styles } from "./PatternedScreen.styles";

type PatternedScreenProps = {
  children: ReactNode;
  style?: StyleProp<ViewStyle>;
  safeAreaStyle?: StyleProp<ViewStyle>;
};

export default function PatternedScreen({
  children,
  style,
  safeAreaStyle,
}: PatternedScreenProps) {
  return (
    <ThemedView style={[styles.container, style]}>
      <DotPattern style={styles.topLeftDots} dotKeyPrefix="top-left" />
      <DotPattern style={styles.bottomRightDots} dotKeyPrefix="bottom-right" />

      <SafeAreaView style={[styles.safeArea, safeAreaStyle]}>
        {children}
      </SafeAreaView>
    </ThemedView>
  );
}
