import { StyleSheet } from "react-native";

import { Colors, MaxContentWidth, Spacing } from "@/constants/theme";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
    overflow: "hidden",
  },
  safeArea: {
    flex: 1,
    alignSelf: "center",
    justifyContent: "center",
    width: "100%",
    maxWidth: MaxContentWidth,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.five,
  },
  topLeftDots: {
    top: -Spacing.six,
    left: -Spacing.six,
  },
  bottomRightDots: {
    right: -Spacing.six,
    bottom: -Spacing.six,
    transform: [{ rotate: "180deg" }],
  },
});
