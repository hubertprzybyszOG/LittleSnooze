import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  pattern: {
    position: "absolute",
    width: 240,
    height: 240,
  },
  dot: {
    position: "absolute",
    backgroundColor: Colors.text,
  },
});
