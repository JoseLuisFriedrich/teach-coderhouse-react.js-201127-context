import { createContext, useContext, useState } from 'react'

const AppContext = createContext()

const useAppContext = () => useContext(AppContext)

export const AppProvider = ({ children }) => {
  const [dummyText, setDummyText] = useState('Archibald Haley')
  const [dummyArray, setDummyArray] = useState([1, 2, 3])

  const [dummyArrayObject, setDummyArrayObject] = useState([{ firstName: 'Lavina', lastName: 'Hoppe' }])

  const [dummyObject, setDummyObject] = useState({ firstName: 'Lavina', lastName: 'Hoppe' })

  const handleDummyText = (newValue) => {
    setDummyText(newValue)
  }

  // setCounter(counter + 1 )
  // setCounter(counter + 1 )

  const handleDummyArrayObject = (newValue) => {
    setDummyArray([...dummyArray, newValue])
    //Forma correcta: setDummyArray((prevDummyArray) => [...prevDummyArray, newValue])
  }

  const handleDummyArray = (newValue) => {
    setDummyArray([...dummyArray, newValue])
    //Forma correcta: setDummyArray((prevDummyArray) => [...prevDummyArray, newValue])
  }

  const handleDummyObject = (key, newValue) => {
    setDummyObject({ ...dummyObject, [key]: newValue })

    //Forma Correcta setDummyObject((prevDummyObject) => ({ ...prevDummyObject, [key]: newValue }))
  }

  return (
    <AppContext.Provider value={{ dummyArrayObject, handleDummyArrayObject, dummyObject, handleDummyObject, dummyArray, handleDummyArray, dummyText, handleDummyText }}>{children}</AppContext.Provider>
  )
}

export default useAppContext
