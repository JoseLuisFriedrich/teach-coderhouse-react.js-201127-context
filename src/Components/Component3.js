import useAppContext from '../context/useAppContext'

const Component3 = () => {
  const { dummyObject, handleDummyObject } = useAppContext()

  console.log(dummyObject)

  const handleBoth = () => {
    // handleDummyObject('firstName', 'Adrain')
    // handleDummyObject('lastName', 'Witting')
  }

  const handleValue = () => {
    handleDummyObject('firstName', 'Adrain')
    // handleDummyArray(4)
  }

  const handleValue1 = () => {
    handleDummyObject('lastName', 'Witting')
    // handleDummyArray(4)
  }

  return (
    <div id='Component1'>
      <h1>{dummyObject.firstName}</h1>
      <h2>{dummyObject.lastName}</h2>

      <button onClick={handleBoth}>new both first and lsat</button>
      <button onClick={handleValue}>new first</button>
      <button onClick={handleValue1}>new last</button>

      <hr />
    </div>
  )
}

export default Component3
