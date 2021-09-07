import React from 'react'
import PropTypes from 'prop-types'

const numberLabels = [
  ['7', '8', '9'],
  ['4', '5', '6'],
  ['1', '2', '3'],
  ['0', '.', 'AC']
]

const Numbers = ({onClickButton}) => {
  return (
    <div className="leftPanel">
      {numberLabels.map((row, i) => (
        <div key={i} className="numbers">
          {row.map((label, i) => (
            <div key={i} onClick={() => onClickButton(label)}>{label}</div>
          ))}
        </div>
      ))}
    </div>
  )
}

Numbers.propTypes = {
  onClickButton: PropTypes.func.isRequired
}

export default Numbers
