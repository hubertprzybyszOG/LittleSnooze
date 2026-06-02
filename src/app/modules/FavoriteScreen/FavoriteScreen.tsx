import { useFocusEffect } from "expo-router";
import { useCallback, useEffect, useState } from "react";
import { ScrollView, View } from "react-native";

import PatternedScreen from "@/components/PatternedScreen";
import { ThemedText } from "@/components/themed-text";
import { type FavoriteSong, getFavoriteSongs } from "@/storage/favoriteSongs";
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

  return (
    <PatternedScreen safeAreaStyle={styles.safeArea}>
      <ScrollView contentContainerStyle={styles.content}>
        <ThemedText type="subtitle" style={styles.title}>
          Favorite noises
        </ThemedText>

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
                <ThemedText style={styles.songTitle}>{song.title}</ThemedText>
                <ThemedText style={styles.songDescription}>
                  {song.description}
                </ThemedText>
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </PatternedScreen>
  );
}
