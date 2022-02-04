import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { fetchWithToken } from '../helpers/fetch'

function CheatsheetContent () {
  const history = useHistory()
  const { cheatsheetId } = useParams()

  useEffect(() => {
    console.log('PARAM', cheatsheetId)
    const fetchData = async () => {
      const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}`)
      const body = await resp.json()
      const { data, ok } = body
      if (ok) {
        console.log(data.cheatsheet)
      } else {
        history.push('/home')
      }
    }
    fetchData()
  }, [cheatsheetId])

  return <div>Contenido</div>
}

export default CheatsheetContent
