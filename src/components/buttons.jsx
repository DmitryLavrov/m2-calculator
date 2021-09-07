import React from 'react'
import Operators from './operators'
import Numbers from './numbers'
import Equal from './equal'
import PropTypes from 'prop-types'

const Buttons = ({onClickButton}) => {
  return (
    <div className="buttons">
      <Operators onClickButton={onClickButton}/>
      <Numbers onClickButton={onClickButton}/>
      <Equal onClickButton={onClickButton}/>
    </div>
  )
}

Buttons.propTypes = {
  onClickButton: PropTypes.func.isRequired
}

export default Buttons
