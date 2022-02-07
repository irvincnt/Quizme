import React, { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import { fetchWithToken } from '../helpers/fetch'

function Sheet () {
  const { cheatsheetId, sheetId } = useParams()
  const history = useHistory()

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const resp = await fetchWithToken(`cheatsheet/${cheatsheetId}`)
  //     const body = await resp.json()
  //     const { data, ok } = body
  //     if (ok) {
  //       console.log('SHEET', data)
  //     } else {
  //       history.push('/home')
  //     }
  //   }
  //   fetchData()
  // }, [cheatsheetId])
  console.log(cheatsheetId, sheetId)
  return <div>Sheet</div>
}

export default Sheet
