import React from 'react'
import PropTypes from 'prop-types'

const Input = ({inputStr}) => {
  return (
    <div className="input">{inputStr}</div>
  )
}

Input.propTypes = {
  inputStr: PropTypes.string.isRequired
}

export default Input
