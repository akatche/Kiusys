import api from "@/services/api.js";

export const getShowsByPage = async (page) => {
  try {
    const url = `/shows?page=${page}`;

    const response = await api.get(url);

    const genres = new Set();

    const parsedShows = response.data.map((show) => {
      show.genres.forEach(genre => {
        genres.add(genre);
      });
      return {
        image: show.image?.original,
        name: show.name,
        type: show.type,
        network: show.network?.name,
        officialSite: show.officialSite,
        genres: show.genres,
        url: show.url
      };
    });

    return {
      shows: parsedShows,
      genres: Array.from(genres)
    };
  } catch (err) {
    // TODO
  }
  return undefined;
};
