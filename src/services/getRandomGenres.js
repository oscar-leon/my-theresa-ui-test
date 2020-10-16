import getGenres from "./getGenres";

const NUMBER_OF_CATEGORIES = 3;

// TODO: clean logic.
function getRandomGenreIndex(genres) {
  const arr = [];
  while (arr.length < NUMBER_OF_CATEGORIES) {
    const r = Math.floor(Math.random() * (genres.length - 1)) + 1;
    if (arr.indexOf(r) === -1) arr.push(r);
  }

  return arr;
}

export default async function getRandomGenres() {
  const genres = await getGenres();
  const genresKeys = Object.keys(genres);
  const randomIndexes = getRandomGenreIndex(genresKeys);

  const randomGenres = randomIndexes.map(randomIndex => {
    return genres[randomIndex];
  });

  return randomGenres;
}
