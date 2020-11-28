import { useEffect, useState } from 'react'
import { getProducts } from '../../db/fakedb'
import ItemList from '../ItemList/ItemList'

const Home = () => {
  const [products, setProducts] = useState([])

  //HomeContainer
  useEffect(() => {
    getProducts().then((response) => {
      setProducts(response)
    })
  }, [])

  return (
    <div id='Home'>
      <ItemList products={products} />
    </div>
  )
}

export default Home
