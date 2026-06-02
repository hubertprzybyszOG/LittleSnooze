import Storage from "expo-sqlite/kv-store";

const FAVORITE_SONGS_STORAGE_KEY = "little-snooze.favorite-songs";

export type FavoriteSong = {
  title: string;
  description: string;
  addedAt: string;
};

type FavoriteSongsStorage = {
  songs: FavoriteSong[];
};

const emptyFavoriteSongs: FavoriteSongsStorage = {
  songs: [],
};

const parseFavoriteSongs = (value: string | null): FavoriteSongsStorage => {
  if (!value) {
    return emptyFavoriteSongs;
  }

  try {
    const parsed = JSON.parse(value) as Partial<FavoriteSongsStorage>;

    if (!Array.isArray(parsed.songs)) {
      return emptyFavoriteSongs;
    }

    return {
      songs: parsed.songs.filter(
        (song): song is FavoriteSong =>
          typeof song.title === "string" &&
          typeof song.description === "string" &&
          typeof song.addedAt === "string"
      ),
    };
  } catch {
    return emptyFavoriteSongs;
  }
};

export const getFavoriteSongs = async () => {
  const storedFavorites = await Storage.getItem(FAVORITE_SONGS_STORAGE_KEY);

  return parseFavoriteSongs(storedFavorites).songs;
};

export const addFavoriteSong = async (
  song: Omit<FavoriteSong, "addedAt">
) => {
  const storedSongs = await getFavoriteSongs();
  const songAlreadySaved = storedSongs.some(
    (storedSong) => storedSong.title === song.title
  );

  const songs = songAlreadySaved
    ? storedSongs
    : [
        ...storedSongs,
        {
          ...song,
          addedAt: new Date().toISOString(),
        },
      ];

  await Storage.setItem(
    FAVORITE_SONGS_STORAGE_KEY,
    JSON.stringify({ songs })
  );

  return songs;
};
