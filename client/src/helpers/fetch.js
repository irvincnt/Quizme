/* eslint-disable no-undef */
const baseUrl = process.env.API_URL

const fetchWithoutToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`
  console.log(url, data)
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

const fetchWithToken = (endpoint, data, method = 'GET') => {
  const url = `${baseUrl}/${endpoint}`
  const token = localStorage.getItem('token') || ''

  if (method === 'GET') {
    return fetch(url, {
      method,
      headers: {
        'x-token': token
      }
    })
  } else {
    return fetch(url, {
      method,
      headers: {
        'Content-type': 'application/json',
        'x-token': token
      },
      body: JSON.stringify(data)
    })
  }
}

export { fetchWithoutToken, fetchWithToken }
