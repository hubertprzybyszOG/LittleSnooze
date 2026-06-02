import { StyleSheet } from "react-native";

import { ButtonRadius, Colors, Fonts, MaxContentWidth, Spacing } from "@/constants/theme";

const styles = StyleSheet.create({
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
  buttonStack: {
    width: "100%",
    maxWidth: 240,
    gap: Spacing.two,
  },
  button: {
    alignItems: "center",
    justifyContent: "center",
    minHeight: 40,
    borderRadius: ButtonRadius,
    borderWidth: 1,
    borderColor: Colors.text,
    backgroundColor: Colors.backgroundSelected,
    paddingHorizontal: Spacing.two,
    paddingVertical: Spacing.one,
  },
  secondaryButton: {
    backgroundColor: Colors.backgroundElement,
  },
  buttonPressed: {
    opacity: 0.7,
  },
  buttonText: {
    color: Colors.textOnSelected,
    fontFamily: Fonts.lato.bold,
    fontSize: 14,
    lineHeight: 18,
    textAlign: "center",
  },
  secondaryButtonText: {
    color: Colors.text,
  },
  favoriteHeart: {
    color: Colors.text,
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

export default styles;
