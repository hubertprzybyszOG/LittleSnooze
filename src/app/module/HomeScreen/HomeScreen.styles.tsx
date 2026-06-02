import { StyleSheet } from "react-native";

import { Colors, Fonts, MaxContentWidth, Spacing } from "@/constants/theme";

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
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.four,
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
  title: {
    maxWidth: 320,
    textAlign: "center",
    fontFamily: Fonts.logo,
    fontSize: 38,
    lineHeight: 44,
    letterSpacing: 0.1,
  },
  welcome: {
    textAlign: "center",
    fontFamily: Fonts.lato.light,
    fontSize: 14,
    lineHeight: 20,
  },
  description: {
    maxWidth: 260,
    marginTop: Spacing.one,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.lato.light,
  },
});
