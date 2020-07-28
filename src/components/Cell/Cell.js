import React from 'react'

const Cell = (props) => {

  return (
  <div className={props.cellClass} onClick={props.cellClick} >
    <span className='Bomb'>{props.hasItem} </span>
  </div>
  )
}
export default Cell