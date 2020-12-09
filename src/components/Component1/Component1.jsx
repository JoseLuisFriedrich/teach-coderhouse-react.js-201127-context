import useAppContext from '../../context/useAppContext'

const Component1 = () => {
  const { dummyText, handleDummyText } = useAppContext()

  const handleValue = () => {
    handleDummyText('Orval Feest')
  }

  return (
    <div id='Component1'>
      <h2>{dummyText}</h2>

      <button onClick={handleValue}>newValue</button>
      <hr />
    </div>
  )
}

export default Component1
