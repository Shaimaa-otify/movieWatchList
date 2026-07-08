exports.handler = async function (event) {
  const ids = event.queryStringParameters?.ids

  if (!ids) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: 'Missing ids parameter' }),
    }
  }

  const key = process.env.OMDB_API_KEY
  const idList = ids.split(',').filter(Boolean)

  try {
    const results = await Promise.all(
      idList.map(async (id) => {
        const response = await fetch(
          `https://www.omdbapi.com/?apikey=${key}&i=${id}`
        )
        if (!response.ok) {
          throw new Error(`OMDB error for id ${id}: ${response.status}`)
        }
        return response.json()
      })
    )

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(results),
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to fetch movie details from OMDB' }),
    }
  }
}
