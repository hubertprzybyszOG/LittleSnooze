import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { Pressable, ScrollView, View } from "react-native";

import PatternedScreen from "@/components/PatternedScreen";
import { ThemedText } from "@/components/themed-text";
import {
  type FavoriteSong,
  getFavoriteSongs,
  removeFavoriteSong,
} from "@/storage/favoriteSongs";
import styles from "./FavoriteScreen.styles";

export default function FavoriteScreen() {
  const [songs, setSongs] = useState<FavoriteSong[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  const loadFavoriteSongs = useCallback(async () => {
    try {
      setErrorMessage(null);
      const storedSongs = await getFavoriteSongs();
      setSongs(storedSongs);
    } catch {
      setErrorMessage("Could not load favorite noises.");
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    void loadFavoriteSongs();
  }, [loadFavoriteSongs]);

  useFocusEffect(
    useCallback(() => {
      void loadFavoriteSongs();
    }, [loadFavoriteSongs])
  );

  const handleDeleteSong = async (title: FavoriteSong["title"]) => {
    try {
      setErrorMessage(null);
      const updatedSongs = await removeFavoriteSong(title);
      setSongs(updatedSongs);
    } catch {
      setErrorMessage("Could not delete favorite noise.");
    }
  };

  return (
    <PatternedScreen safeAreaStyle={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText style={styles.description}>Favorite 2 noises...</ThemedText>

        {isLoading ? (
          <ThemedText style={styles.emptyText}>Loading favorites...</ThemedText>
        ) : errorMessage ? (
          <ThemedText style={styles.emptyText}>{errorMessage}</ThemedText>
        ) : songs.length === 0 ? (
          <ThemedText style={styles.emptyText}>
            No favorite noises yet. Tap the heart on a noise to save it here.
          </ThemedText>
        ) : (
          <View style={styles.list}>
            {songs.map((song) => (
              <View key={song.title} style={styles.songCard}>
                <Pressable
                  accessibilityLabel={`Play ${song.title}`}
                  onPress={() => undefined}
                  style={({ pressed }) => [
                    styles.iconButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <View style={styles.playIcon} />
                </Pressable>

                <View style={styles.songDetails}>
                  <ThemedText style={styles.songTitle}>{song.title}</ThemedText>
                  <ThemedText style={styles.songDescription}>
                    {song.description}
                  </ThemedText>
                </View>

                <Pressable
                  accessibilityLabel={`Delete ${song.title}`}
                  onPress={() => void handleDeleteSong(song.title)}
                  style={({ pressed }) => [
                    styles.iconButton,
                    pressed && styles.buttonPressed,
                  ]}
                >
                  <View style={styles.deleteIcon}>
                    <View style={styles.deleteLid} />
                    <View style={styles.deleteCan}>
                      <View style={styles.deleteLine} />
                      <View style={styles.deleteLine} />
                    </View>
                  </View>
                </Pressable>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </PatternedScreen>
  );
}
