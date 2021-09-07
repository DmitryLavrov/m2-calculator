import React from 'react'
import PropTypes from 'prop-types'

const operatorLabels = ['+', '-', '*', '/']

const Operators = ({onClickButton}) => {
  return (
    <div className="operators">
      {operatorLabels.map((label, i) => (
        <div key={i} onClick={() => onClickButton(label)}>{label}</div>
      ))}
    </div>
  )
}

Operators.propTypes = {
  onClickButton: PropTypes.func.isRequired
}

export default Operators
