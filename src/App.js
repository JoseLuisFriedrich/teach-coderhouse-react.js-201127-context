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
