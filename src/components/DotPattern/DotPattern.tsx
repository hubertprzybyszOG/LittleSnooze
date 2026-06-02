import { View } from "react-native";
import { styles } from "./DotPattern.styles";
import {
  DEFAULT_DOTS,
  DotPatternDot,
  DotPatternProps,
} from "./DotPattern.types";

export default function DotPattern({
  dots = DEFAULT_DOTS,
  style,
  dotKeyPrefix = "dot-pattern",
}: DotPatternProps) {
  return (
    <View
      style={[styles.pattern, style]}
      accessibilityElementsHidden
      importantForAccessibility="no-hide-descendants"
    >
      {dots.map((dot, index) => (
        <View
          key={`${dotKeyPrefix}-${index}`}
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
  );
}

export function createHalftoneDots(): DotPatternDot[] {
  const dots: DotPatternDot[] = [];
  const spacing = 10;
  const radius = 250;
  const center = -24;

  for (let y = 0; y <= 240; y += spacing) {
    for (let x = 0; x <= 240; x += spacing) {
      const distance = Math.hypot(x - center, y - center);
      const wave = Math.sin(x * 0.08) * 12 + Math.cos(y * 0.07) * 10;

      if (distance > radius + wave) {
        continue;
      }

      const density = Math.max(0, 1 - distance / radius);
      const noise = ((x * 17 + y * 31) % 9) / 10;
      const size = Math.max(1.4, Math.min(8.5, density * 8 + noise));

      dots.push({ x, y, size });
    }
  }

  return dots;
}
