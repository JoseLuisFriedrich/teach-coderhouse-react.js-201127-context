import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getProductById } from '../../db/fakedb'

const ItemDetailContainer = () => {
  const { id } = useParams()
  useEffect(() => {
    getProductById(id)
      .then(
        (response) => {
          console.log(response)
        },
        (err) => {
          console.error(err)
        }
      )
      .catch((err) => {
        console.error(err)
      })
      .finally(() => {})
  }, [])

  return (
    <div id='ItemDetailContainer'>
      <h2>{id}</h2>
    </div>
  )
}

export default ItemDetailContainer
