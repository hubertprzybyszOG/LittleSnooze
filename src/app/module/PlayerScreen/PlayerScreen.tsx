import {
  setAudioModeAsync,
  useAudioPlayer,
  useAudioPlayerStatus,
} from "expo-audio";
import { useEffect, useState } from "react";
import { Pressable, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import DotPattern from "@/app/components/DotPattern";
import { ThemedText } from "@/components/themed-text";
import { ThemedView } from "@/components/themed-view";
import { AUDIO_TRACKS } from "./PlayerScreen.const";
import styles from "./PlayerScreen.styles";
import { formatTime } from "./PlayerScreen.utils";

export default function PlayerScreen() {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const currentTrack = AUDIO_TRACKS[currentTrackIndex];
  const player = useAudioPlayer(AUDIO_TRACKS[0].source, {
    updateInterval: 250,
  });
  const status = useAudioPlayerStatus(player);
  const duration = status.duration || 0;
  const progress =
    duration > 0 ? Math.min(status.currentTime / duration, 1) : 0;

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

  const replaceTrack = (nextTrackIndex: number) => {
    const wasPlaying = status.playing;

    setCurrentTrackIndex(nextTrackIndex);
    player.replace(AUDIO_TRACKS[nextTrackIndex].source);
    player.loop = true;

    if (wasPlaying) {
      player.play();
    }
  };

  const handlePrevious = () => {
    replaceTrack(
      (currentTrackIndex - 1 + AUDIO_TRACKS.length) % AUDIO_TRACKS.length
    );
  };

  const handleNext = () => {
    replaceTrack((currentTrackIndex + 1) % AUDIO_TRACKS.length);
  };

  return (
    <ThemedView style={styles.container}>
      <DotPattern style={styles.topLeftDots} dotKeyPrefix="top-left" />
      <DotPattern style={styles.bottomRightDots} dotKeyPrefix="bottom-right" />

      <SafeAreaView style={styles.safeArea}>
        <View style={styles.content}>
          <View style={styles.trackCard}>
            <ThemedText type="subtitle" style={styles.title}>
              {currentTrack.title}
            </ThemedText>
            <ThemedText style={styles.description}>
              {currentTrack.description}
            </ThemedText>

            <View style={styles.progressSection}>
              <View
                style={styles.progressTrack}
                accessibilityRole="progressbar"
              >
                <View
                  style={[styles.progressFill, { width: `${progress * 100}%` }]}
                />
              </View>

              <View style={styles.timeRow}>
                <ThemedText style={styles.timeText}>
                  {formatTime(status.currentTime)}
                </ThemedText>
                <ThemedText style={styles.timeText}>
                  {formatTime(duration)}
                </ThemedText>
              </View>
            </View>

            <View style={styles.cardControls}>
              <Pressable
                accessibilityLabel="Previous noise"
                onPress={handlePrevious}
                style={({ pressed }) => [
                  styles.button,
                  styles.secondaryButton,
                  pressed && styles.buttonPressed,
                ]}
              >
                <View style={styles.previousIcon}>
                  <View style={styles.skipBar} />
                  <View style={styles.previousTriangle} />
                </View>
              </Pressable>

              <Pressable
                accessibilityLabel="Play"
                onPress={handlePlay}
                style={({ pressed }) => [
                  styles.button,
                  styles.playButton,
                  styles.primaryButton,
                  pressed && styles.buttonPressed,
                ]}
              >
                <View style={styles.playIcon} />
              </Pressable>

              <Pressable
                accessibilityLabel="Next noise"
                onPress={handleNext}
                style={({ pressed }) => [
                  styles.button,
                  styles.secondaryButton,
                  pressed && styles.buttonPressed,
                ]}
              >
                <View style={styles.nextIcon}>
                  <View style={styles.nextTriangle} />
                  <View style={styles.skipBar} />
                </View>
              </Pressable>
            </View>
          </View>

          <View style={styles.buttonStack}>
            <Pressable
              accessibilityLabel="Pause"
              onPress={handlePause}
              style={({ pressed }) => [
                styles.button,
                styles.secondaryButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <View style={styles.pauseIcon}>
                <View style={styles.pauseBar} />
                <View style={styles.pauseBar} />
              </View>
            </Pressable>

            <Pressable
              accessibilityLabel="Stop"
              onPress={handleStop}
              style={({ pressed }) => [
                styles.button,
                styles.secondaryButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <View style={styles.stopIcon} />
            </Pressable>

            <Pressable
              accessibilityLabel="Add to favourites"
              style={({ pressed }) => [
                styles.button,
                styles.secondaryButton,
                pressed && styles.buttonPressed,
              ]}
            >
              <ThemedText style={styles.heartIcon}>♥</ThemedText>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>
    </ThemedView>
  );
}
