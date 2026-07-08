exports.handler = async function (event) {
  const query = event.queryStringParameters?.q

  if (!query) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing query parameter' }),
    }
  }

  const key = process.env.OMDB_API_KEY

  try {
    const response = await fetch(
      `https://www.omdbapi.com/?apikey=${key}&s=${encodeURIComponent(query)}`
    )
    const data = await response.json()

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch from OMDB' }),
    }
  }
}
