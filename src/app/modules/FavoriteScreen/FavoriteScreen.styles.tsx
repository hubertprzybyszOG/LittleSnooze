import { StyleSheet } from "react-native";

import { ButtonRadius, Colors, Fonts, Spacing } from "@/constants/theme";

const styles = StyleSheet.create({
  safeArea: {
    justifyContent: "flex-start",
  },
  content: {
    alignItems: "center",
    gap: Spacing.four,
    paddingVertical: Spacing.five,
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
  emptyText: {
    maxWidth: 260,
    textAlign: "center",
    fontFamily: Fonts.lato.light,
    fontSize: 14,
    lineHeight: 20,
  },
  list: {
    width: "100%",
    maxWidth: 340,
    gap: Spacing.three,
  },
  songCard: {
    width: "100%",
    borderRadius: 32,
    borderWidth: 1,
    borderColor: Colors.text,
    backgroundColor: Colors.backgroundElement,
    paddingHorizontal: Spacing.four,
    paddingVertical: Spacing.three,
    shadowColor: Colors.text,
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.5,
    shadowRadius: 5,
    elevation: 5,
  },
  songTitle: {
    fontFamily: Fonts.lato.bold,
    fontSize: 18,
    lineHeight: 24,
  },
  songDescription: {
    marginTop: Spacing.one,
    fontFamily: Fonts.lato.light,
    fontSize: 14,
    lineHeight: 20,
  },
});

export default styles;
