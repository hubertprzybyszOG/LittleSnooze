import { StyleSheet } from "react-native";

import { ButtonRadius, Colors, Fonts, Spacing } from "@/constants/theme";

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.four,
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
