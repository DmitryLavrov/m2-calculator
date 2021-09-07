import React, {useEffect, useState} from 'react'

import Input from './input'
import Buttons from './buttons'
import handleCalculator from '../handlers/handleCalculator'
import Alert from './alert'

const Calculator = () => {
  const initState = {
    inputStr: '0',
    hasError: false,
    errorMessage: ''
  }

  const [state, setState] = useState(initState)

  useEffect(() => {
    addEventListener('keyup', onKeyPress)
    return () => removeEventListener('keyup', onKeyPress)
  }, [])

  const onKeyPress = (event) => {
    onClickButton(event.key)
  }

  const onClickButton = (label) => {
    setState(prev => ({
        ...prev,
        hasError: false,
        ...handleCalculator(prev.inputStr, label)
      })
    )
  }

  const onHideError = () => {
    setState(prev => ({
      ...prev,
      hasError: false
    }))
  }

  return (
    <div className="calculator">
      <Alert hasError={state.hasError} message={state.errorMessage} onHideError={onHideError}/>
      <Input inputStr={state.inputStr}/>
      <Buttons onClickButton={onClickButton}/>
    </div>
  )
}

export default Calculator
