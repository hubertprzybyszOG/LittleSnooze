import {
  setAudioModeAsync,
  useAudioPlayer,
  useAudioPlayerStatus,
} from "expo-audio";
import { useFocusEffect, useLocalSearchParams } from "expo-router";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { Animated, Pressable, View } from "react-native";

import PatternedScreen from "@/components/PatternedScreen";
import { ThemedText } from "@/components/themed-text";
import { addFavoriteSong, getFavoriteSongs } from "@/storage/favoriteSongs";
import { AUDIO_TRACKS } from "./PlayerScreen.const";
import styles from "./PlayerScreen.styles";
import { formatTime } from "./PlayerScreen.utils";

const MAX_FAVORITE_SONGS = 2;

export default function PlayerScreen() {
  const { trackTitle } = useLocalSearchParams<{ trackTitle?: string }>();
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [favoriteSongsCount, setFavoriteSongsCount] = useState(0);
  const favoriteScale = useMemo(() => new Animated.Value(1), []);
  const lastRequestedTrackTitle = useRef<string | null>(null);
  const currentTrack = AUDIO_TRACKS[currentTrackIndex];
  const player = useAudioPlayer(AUDIO_TRACKS[0].source, {
    updateInterval: 250,
  });
  const status = useAudioPlayerStatus(player);
  const duration = status.duration || 0;
  const progress =
    duration > 0 ? Math.min(status.currentTime / duration, 1) : 0;
  const isFavoriteLimitReached = favoriteSongsCount >= MAX_FAVORITE_SONGS;

  useEffect(() => {
    void setAudioModeAsync({ playsInSilentMode: true });
  }, []);

  useEffect(() => {
    if (!status.didJustFinish) {
      return;
    }

    void player.seekTo(0).then(() => {
      player.play();
    });
  }, [player, status.didJustFinish]);

  const loadFavoriteSongsCount = useCallback(async () => {
    const favoriteSongs = await getFavoriteSongs();
    setFavoriteSongsCount(favoriteSongs.length);
  }, []);

  useFocusEffect(
    useCallback(() => {
      void loadFavoriteSongsCount();
    }, [loadFavoriteSongsCount])
  );

  useFocusEffect(
    useCallback(() => {
      if (!trackTitle || lastRequestedTrackTitle.current === trackTitle) {
        return;
      }

      const requestedTrackIndex = AUDIO_TRACKS.findIndex(
        (track) => track.title === trackTitle
      );

      if (requestedTrackIndex === -1) {
        return;
      }

      lastRequestedTrackTitle.current = trackTitle;
      setCurrentTrackIndex(requestedTrackIndex);
      player.replace(AUDIO_TRACKS[requestedTrackIndex].source);
      void player.seekTo(0);
    }, [player, trackTitle])
  );

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

  const animateFavoriteButton = () => {
    Animated.sequence([
      Animated.timing(favoriteScale, {
        toValue: 1.15,
        duration: 120,
        useNativeDriver: true,
      }),
      Animated.timing(favoriteScale, {
        toValue: 1,
        duration: 120,
        useNativeDriver: true,
      }),
    ]).start();
  };

  const handleAddToFavourites = async () => {
    if (isFavoriteLimitReached) {
      return;
    }

    animateFavoriteButton();

    const favoriteSongs = await addFavoriteSong({
      title: currentTrack.title,
      description: currentTrack.description,
    });
    setFavoriteSongsCount(favoriteSongs.length);
  };

  return (
    <PatternedScreen>
      <View style={styles.content}>
        <View style={styles.trackCard}>
          <ThemedText type="subtitle" style={styles.title}>
            {currentTrack.title}
          </ThemedText>
          <ThemedText style={styles.description}>
            {currentTrack.description}
          </ThemedText>

          <View style={styles.progressSection}>
            <View style={styles.progressTrack} accessibilityRole="progressbar">
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

          <Animated.View style={{ transform: [{ scale: favoriteScale }] }}>
            <Pressable
              accessibilityLabel="Add to favourites"
              accessibilityState={{ disabled: isFavoriteLimitReached }}
              disabled={isFavoriteLimitReached}
              onPress={() => void handleAddToFavourites()}
              style={({ pressed }) => [
                styles.button,
                styles.secondaryButton,
                pressed && styles.buttonPressed,
                isFavoriteLimitReached && styles.buttonDisabled,
              ]}
            >
              <ThemedText style={styles.heartIcon}>♥</ThemedText>
            </Pressable>
          </Animated.View>
        </View>
      </View>
    </PatternedScreen>
  );
}
