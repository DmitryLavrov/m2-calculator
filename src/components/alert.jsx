import React from 'react'
import PropTypes from 'prop-types'

const Alert = ({hasError, message, onHideError}) => {
  return (
    <p className={'alert' + (hasError ? '' : ' alert-hide')} onClick={onHideError}>
      {message}
    </p>
  )
}

Alert.propTypes = {
  hasError: PropTypes.bool.isRequired,
  message: PropTypes.string.isRequired,
  onHideError: PropTypes.func.isRequired
}

export default Alert
