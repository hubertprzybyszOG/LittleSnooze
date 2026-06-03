import { StyleSheet } from "react-native";

import { Fonts, Spacing } from "@/constants/theme";

const styles = StyleSheet.create({
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: Spacing.four,
  },
  title: {
    alignSelf: "stretch",
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
    alignSelf: "stretch",
    marginTop: Spacing.one,
    textAlign: "center",
    fontSize: 14,
    lineHeight: 20,
    fontFamily: Fonts.lato.light,
  },
});

export default styles;
