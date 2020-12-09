import './App.css'
import Home from './containers/Home/Home'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import ItemDetailContainer from './containers/ItemDetailContainer/ItemDetailContainer'
import { AppProvider } from './context/useAppContext'
import Component1 from './components/Component1/Component1'
import Component2 from './components/Component2/Component2'
import Component3 from './components/Component3/Component3'

// const ItemCount = ({inicit, min, max, onAdd}) => {
//   const [count, setCount] = useState(0)

//   const increment = () => {
//     setCount(count+1)
//     onAdd(count+1)
//   }

//   return (
//     <div id='App'>
//       <h2>App</h2>
//       {/* <button></button> */}
//     </div>
//   )
// }

// const ItemDetail = ({product}) => {
//   //
//   const counterHandler = (counter) => {
//     console.log(counter)
//   }

//   return (
//     <div id='App'>
//       <h2>App</h2>
//       <ItemCount onAdd={counterHandler} />
//       <button  ></button>

//     </div>
//   )
// }

function App() {
  return (
    <div className='App'>
      <AppProvider>
        <Component3 />
        <Component2 />
        <Component1 />

        <BrowserRouter>
          {/* <NavBar /> */}
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route exact path='/Cart'>
              {/* <Cart /> */}
            </Route>
            <Route exact path='/detalleitem/:id'>
              <ItemDetailContainer />
            </Route>
          </Switch>

          {/* <Footer /> */}
        </BrowserRouter>
      </AppProvider>
    </div>
  )
}

export default App

/////////////
// CONTEXT //
/////////////

// 00:00:00 ✔️ Liberías para darle estilo al sitio (Boostrap, Material UI, Styled Components, SCSS, Font-Awesome)
// 00:07:00 ✔️ Repaso de promesas y filtrar elemento de array de productos.
// 00:15:00 ✔️ Resolviendo problema de utilización de la api https://my-json-server.typicode.com/ para hacer una fake api con datos propios
// 00:24:00 ✔️ Link to a cada producto para hacer la redirección al detalle correspondiente, BrowserRouter
//          💩 (sólo Home e ItemDetailContainer van en /containers. El resto en /components, no hacer como yo que metí todo en containers)
//          👀 (lo acomodé en mi GitHub)
// 00:50:00 ✔️ Explicación del desafío de useContext, props de evento para tener el botón comprar en ItemDetail y recibir el counter de ItemCount
// 00:57:00 ✔️ creación de context, useContext con useState Texto, consumir contexto
// 01:08:00 ✔️ El custom hook más sencillo del mundo para simplificar el consumo de AppContext en componentes. Creando "useAppContext"
// 01:22:00 ✔️ useContext con useState Texto, implementación de función para setear Texto
// 01:26:00 💪 useContext con useState Array, implementación de función para setear Array (¡importante!)
// 01:33:00 ✔️ useContext con useState Object, implementación de función para setear Object

/////////////////
// EXTRA CLASS //
/////////////////

// 01:46:00 💪 Functional Updates -> Seteando states Array y Object como un "pro react developer"
// 01:57:00 ✔️ Cómo se implementaría un array de objetos para agregar varios objetos a una lista
//          👀 (En 02:02:00) copié handleDummyObject, pero tenía que copiar handleDummyArrayObject
// 02:03:00 🍺 Cómo consumir api de Twitter con Python y cómo podría implementarse en JavaScript
