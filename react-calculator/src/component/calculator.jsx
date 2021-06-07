import React, { useState } from 'react'

const Calculator = () => {
  const [numberOne, setNumberOne] = useState('')
  const [numberTwo, setNumberTwo] = useState('')
  const [operator, setOperator] = useState('+')
  const [result, setResult] = useState('')
  const [error, setError] = useState('')

  const notANumber = () => {
    setError('')
    if (isNaN(numberOne && numberTwo)) {
      return setError("Please provide a valid number for both operands")
    }
    switch (numberOne && numberTwo) {
      case '':
      case undefined:
        return setError("Please provide a valid number for both operands")
      default:
        return calculate
    }
  }

  const calculate = () => {
    setResult('')
    setError('')
    notANumber('')
    switch (operator) {
      case "+":
        return setResult(parseInt(numberOne)+parseInt(numberTwo))
      case "-":
       return setResult(parseInt(numberOne)-parseInt(numberTwo))
      case "*":
       return setResult(parseInt(numberOne)*parseInt(numberTwo))
      case "/":
       return setResult(parseInt(numberOne)/parseInt(numberTwo))   
      default:
       return setError("Please provide a valid number for both operands")
    }
  }

  return (
    <div>
      <div className="title">React Calculator</div>
          <input type="text" name="search" value={numberOne} onChange={event =>
          setNumberOne(event.target.value)} />
          <select id="operator" value={operator} onChange={event =>
          setOperator(event.target.value)} >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input type="text" name="search" value={numberTwo} onChange={event =>
          setNumberTwo(event.target.value)} />
          <input type="button" value="=" onClick={calculate} />
          <input value={result} disabled />
      <div className="error">{error ?`${error}`: null}</div>
    </div>
  )
}

export default Calculator