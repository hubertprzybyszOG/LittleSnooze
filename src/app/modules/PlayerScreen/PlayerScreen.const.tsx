export const AUDIO_TRACKS = [
  {
    title: "Calm Noise",
    description: "A soft generated noise loop for sleepy moments.",
    source: require("@/assets/audio/calm-noise.wav"),
  },
  {
    title: "White Noise",
    description: "A bright steady static for masking busy rooms.",
    source: require("@/assets/audio/white-noise.wav"),
  },
  {
    title: "Pink Noise",
    description: "A balanced soft hiss with a warmer bedtime tone.",
    source: require("@/assets/audio/pink-noise.wav"),
  },
  {
    title: "Brown Noise",
    description: "A deep low rumble for a heavier calm sound.",
    source: require("@/assets/audio/brown-noise.wav"),
  },
  {
    title: "Rain Noise",
    description: "A gentle rainy texture with small soft drops.",
    source: require("@/assets/audio/rain-noise.wav"),
  },
  {
    title: "Ocean Noise",
    description: "A slow wave-like wash for a quieter evening.",
    source: require("@/assets/audio/ocean-noise.wav"),
  },
  {
    title: "Fan Noise",
    description: "A steady fan hum for simple background comfort.",
    source: require("@/assets/audio/fan-noise.wav"),
  },
] as const;
