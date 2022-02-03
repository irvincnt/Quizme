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

const fetchPromises = (endpoint, data, method) => {
  return new Promise((resolve, reject) => {
    return fetchWithToken(endpoint, data, method)
      .then(response => {
        if (response.ok) {
          resolve(response)
        } else {
          reject(new Error('Error'))
        }
      })
      .catch(error => {
        reject(new Error(error))
      })
  })
}

export { fetchWithoutToken, fetchWithToken, fetchPromises }
