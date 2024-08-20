import React from 'react'

const Card = ({text}) => {
  const style = 'bg-white select-none inline' 
  + ' m-2 p-2'

  return (
    <div className={style}>
      {text}
    </div>
  )
}

export default Card
