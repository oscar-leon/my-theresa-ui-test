import fetcher from "../utils/fetcher";

const MOVIES_URL_BASE = "/movie";

export default async function getMovieDetail(id) {
  const movieDetail = await fetcher(`${MOVIES_URL_BASE}/${id}`);

  return movieDetail;
}
