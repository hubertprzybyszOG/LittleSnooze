import { useEffect } from "react";
import { Pressable, View } from "react-native";
import { setAudioModeAsync, useAudioPlayer, useAudioPlayerStatus } from "expo-audio";
import { SafeAreaView } from "react-native-safe-area-context";

import DotPattern from "@/app/components/DotPattern";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import styles from "./PlayerScreen.styles";

const calmNoiseSource = require("@/assets/audio/calm-noise.wav");

function formatTime(seconds: number) {
  const safeSeconds = Number.isFinite(seconds) ? Math.max(0, seconds) : 0;
  const minutes = Math.floor(safeSeconds / 60);
  const remainingSeconds = Math.floor(safeSeconds % 60);

  return `${minutes}:${remainingSeconds.toString().padStart(2, "0")}`;
}

export default function PlayerScreen() {
  const player = useAudioPlayer(calmNoiseSource, { updateInterval: 250 });
  const status = useAudioPlayerStatus(player);
  const duration = status.duration || 0;
  const progress = duration > 0 ? Math.min(status.currentTime / duration, 1) : 0;

  useEffect(() => {
    void setAudioModeAsync({ playsInSilentMode: true });
    player.loop = true;
    player.volume = 0.7;
  }, [player]);

  const handlePlay = () => {
    player.play();
  };

  const handlePause = () => {
    player.pause();
  };

  const handleStop = () => {
    player.pause();
    void player.seekTo(0);
  };

  return (
    <ThemedView style={styles.container}>
      <DotPattern style={styles.topLeftDots} dotKeyPrefix="top-left" />
      <DotPattern style={styles.bottomRightDots} dotKeyPrefix="bottom-right" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.trackCard}>
            <ThemedText type="subtitle" style={styles.title}>
              Calm Noise
            </ThemedText>
            <ThemedText style={styles.description}>A soft generated noise loop for sleepy moments.</ThemedText>

            <View style={styles.progressSection}>
              <View style={styles.progressTrack} accessibilityRole="progressbar">
                <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
              </View>

              <View style={styles.timeRow}>
                <ThemedText style={styles.timeText}>{formatTime(status.currentTime)}</ThemedText>
                <ThemedText style={styles.timeText}>{formatTime(duration)}</ThemedText>
              </View>
            </View>

            <Pressable
              accessibilityLabel="Play"
              onPress={handlePlay}
              style={({ pressed }) => [styles.button, styles.playButton, styles.primaryButton, pressed && styles.buttonPressed]}
            >
              <View style={styles.playIcon} />
            </Pressable>
          </View>

          <View style={styles.buttonStack}>
            <Pressable
              accessibilityLabel="Pause"
              onPress={handlePause}
              style={({ pressed }) => [styles.button, styles.secondaryButton, pressed && styles.buttonPressed]}
            >
              <View style={styles.pauseIcon}>
                <View style={styles.pauseBar} />
                <View style={styles.pauseBar} />
              </View>
            </Pressable>

            <Pressable
              accessibilityLabel="Stop"
              onPress={handleStop}
              style={({ pressed }) => [styles.button, styles.secondaryButton, pressed && styles.buttonPressed]}
            >
              <View style={styles.stopIcon} />
            </Pressable>

            <Pressable
              accessibilityLabel="Add to favourites"
              style={({ pressed }) => [styles.button, styles.secondaryButton, pressed && styles.buttonPressed]}
            >
              <ThemedText style={styles.heartIcon}>♥</ThemedText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}
