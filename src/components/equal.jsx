import React from 'react'
import PropTypes from 'prop-types'

const equalLabel = '='

const Equal = ({onClickButton}) => {
  return (
    <div className="equal" onClick={() => onClickButton(equalLabel)}>{equalLabel}</div>
  )
}

Equal.propTypes = {
  onClickButton: PropTypes.func.isRequired
}

export default Equal
