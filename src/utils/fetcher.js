export default async function fetcher(url, options = {}) {
  const { urlParams = {} } = options;
  const searchParams = {
    api_key: `${process.env.API_KEY}`,
    ...urlParams
  };

  const URI = new URL(`${process.env.BASE_API_URL}${url}`);

  Object.keys(searchParams).forEach(
    key => searchParams[key] && URI.searchParams.append(key, searchParams[key])
  );

  const response = await fetch(URI, {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
    }
  });

  const json = await response.json();

  return json;
}
