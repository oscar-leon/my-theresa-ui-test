import fetcher from "../utils/fetcher";

const GENRES_URL = "/genre/movie/list";

export default async function getGenres() {
  const { genres } = await fetcher(GENRES_URL);

  return genres;
}
