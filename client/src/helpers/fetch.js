/* eslint-disable no-undef */
const baseUrl = process.env.API_URL

const fetchWithoutToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`
  console.log('URL', url)
  if (method === 'GET') {
    return fetch(url)
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(data)
    })
  }
}

export { fetchWithoutToken }
