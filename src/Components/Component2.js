import useAppContext from '../context/useAppContext'

const Component2 = () => {
  const { dummyArray, handleDummyArray } = useAppContext()

  const handleValue = () => {
    handleDummyArray(4)
    // handleDummyArray(5)
  }

  return (
    <div id='Component1'>
      <h2>
        {dummyArray.map((entry) => (
          <h2>{entry}</h2>
        ))}
      </h2>

      <button onClick={handleValue}>newValue</button>
      <hr />
    </div>
  )
}

export default Component2
