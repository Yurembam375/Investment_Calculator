import Header from "./componet/Header"
import Result from "./componet/Result";
import UserInput from "./componet/UserInput"
import { useState } from "react"

function App() {

  const [useInput, setUserInput] = useState(
    {
      initialInvestment: 10000,
      annualInvestment: 1200,
      expextedReturn: 6,
      duration: 12
    }
  )


  function handleUserInput(inputIdentifier, newValue) {
    setUserInput(prevInput => {
      return {
        ...prevInput,
        [inputIdentifier]: +newValue
      }
    });
  }

  return (
    <>
      <Header />
      <UserInput onChange={handleUserInput} useInput={useInput} />
      <Result input={useInput} />
    </>

  )
}

export default App
