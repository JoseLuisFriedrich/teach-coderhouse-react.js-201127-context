import Item from '../Item/Item'

const ItemList = ({ products }) => {
  return (
    <div id='ItemList'>
      {products.map((product) => (
        <Item key={product.id} product={product} />
      ))}
    </div>
  )
}

export default ItemList

{
  /* <div>
    <h3 className="tituloLista">Lista de Productos</h3>
    <ol id="listaProductos">
        {productos.map(productos => <li key={productos.id}><a>
          <NavLink to={'/detalleitem/'}>{productos.nombre}</NavLink></a></li>)}
     </ol>
     </div>
 */
}
