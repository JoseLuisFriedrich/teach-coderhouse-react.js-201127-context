import { Link } from 'react-router-dom'
// import useAppContext from '../../context/useAppContext'

const Item = ({ product }) => {
  // const { dummyText } = useAppContext()
  //const { dummyText } = useContext(AppContext)

  return (
    <div id='Item'>
      <Link to={`/detalleitem/${product.id}`}>
        <h2>{product.product}</h2>
        {/* <h3>{dummyText}</h3> */}
      </Link>
    </div>
  )
}

export default Item
