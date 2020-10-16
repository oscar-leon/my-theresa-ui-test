import fetcher from "../utils/fetcher";

const LATEST_URI = `/discover/movie`;

export default async function getLatestByGenre(id) {
  const latestByGenre = await fetcher(LATEST_URI, {
    urlParams: { with_genres: id }
  });

  return latestByGenre;
}
