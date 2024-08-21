import React from 'react'
import { useState } from 'react';

const Card = ({text}) => {

  const [position, setPosition] = useState({x: 0, y: 0})
  const [prevPosition, setPrevPosition] = useState({x: 0, y: 0})

  const dragEndHandler = (e)=>{
    const currPosition = {x: e.screenX, y: e.screenY}
    const diff = {
      x: position.x + (currPosition.x - prevPosition.x),
      y: position.y + (currPosition.y - prevPosition.y)
    }
    
    setPosition(diff)
  }

  const dragStartHandler = (e)=>{
    setPrevPosition({x: e.screenX, y: e.screenY})
  }

  const cardStyle = {
    position: 'relative',
    left: `${position.x}px`,
    top: `${position.y}px`,
    backgroundColor: 'white',
    margin: '8px',
    padding: '8px',
    display: 'inline-block',
  };

  return (
    <div style={cardStyle} draggable onDragStart={dragStartHandler} onDragEnd={dragEndHandler}>
      {text}
    </div>
  )
}

export default Card
