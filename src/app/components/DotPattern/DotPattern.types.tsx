import { type StyleProp, type ViewStyle } from "react-native";
import { createHalftoneDots } from "./DotPattern";

export type DotPatternDot = {
  x: number;
  y: number;
  size: number;
};

export type DotPatternProps = {
  dots?: DotPatternDot[];
  style?: StyleProp<ViewStyle>;
  dotKeyPrefix?: string;
};

export const DEFAULT_DOTS = createHalftoneDots();
