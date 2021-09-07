import PropTypes from 'prop-types'

const numberLabels = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9']
const operatorLabels = ['-', '+', '*', '/']

const handleCalculator = (inputStr, label) => {
  if (numberLabels.includes(label)) return handleNumber(inputStr, label)
  if (operatorLabels.includes(label)) return handleOperator(inputStr, label)
  if (['.', ','].includes(label)) return handlePoint(inputStr)
  if (['=', 'Enter'].includes(label)) return handleEqual(inputStr)
  if (['AC', 'Escape'].includes(label)) return handleAC()
}

const handleNumber = (inputStr, label) => {
  if (['0', 'Infinity', '-Infinity'].includes(inputStr)) return {inputStr: label}
  return {inputStr: inputStr + label}
}

const handlePoint = (inputStr) => {
  if (numberLabels.includes(inputStr.slice(-1)) && !hasPointInLastDigit(inputStr)) {
    return {inputStr: inputStr + '.'}
  }
  if (operatorLabels.includes(inputStr.slice(-1))) {
    return {inputStr: inputStr + '0.'}
  }

  return {hasError: true, errorMessage: 'Dot is not valid here (click me)'}
}

const hasPointInLastDigit = (inputStr) => {
  const inputArr = inputStr.split('')
  let lastChar = ''
  while (inputArr.length > 0) {
    lastChar = inputArr.pop()
    if (operatorLabels.includes(lastChar)) return false
    if (lastChar === '.') return true
  }
  return false
}

const handleOperator = (inputStr, label) => {
  if (operatorLabels.includes(inputStr.slice(-1)) || inputStr.slice(-1) === '.') {
    return {inputStr: inputStr.slice(0, -1) + label}
  }
  if (numberLabels.includes(inputStr.slice(-1))) {
    return {inputStr: inputStr + label}
  }

  return {hasError: true, errorMessage: 'Operator is not valid here (click me)'}
}

const handleEqual = (inputStr) => {
  if (operatorLabels.includes(inputStr.slice(-1))) {
    return {inputStr: calculate(inputStr.slice(0, -1))}
  }
  return {inputStr: calculate(inputStr)}
}

const calculate = (str) => {
  let total = 0
  const arr = str.match(/[+\-*/]*(\.\d+|\d+(\.\d+)?)/g) || []

  for (let i = 1; i < arr.length; i++) {
    [arr[i - 1], arr[i]] = solveMultiplyAndDivision([arr[i - 1], arr[i]])
  }

  while (arr.length) {
    total += parseFloat(arr.shift())
  }

  return parseFloat(total.toPrecision(6)).toString()
}

const solveMultiplyAndDivision = ([a, b]) => {
  if (b.slice(0, 1) === '*') return ['0', (parseFloat(a) * parseFloat(b.slice(1))).toString()]
  if (b.slice(0, 1) === '/') return ['0', (parseFloat(a) / parseFloat(b.slice(1))).toString()]
  return [a, b]
}

const handleAC = () => {
  return {inputStr: '0'}
}

handleCalculator.propTypes = {
  inputStr: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default handleCalculator
