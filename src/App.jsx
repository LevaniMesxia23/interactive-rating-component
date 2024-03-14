import { useState } from 'react'
import './App.css'
import Rate from './components/Rate/Rate'
import Result from './components/Result/Result'

function App() {
  const [submit, setSubmit] = useState(false)
  return (
    <>
     {submit ? <Result /> : <Rate setSubmit={setSubmit}/>}
    </>
  )
}

export default App
