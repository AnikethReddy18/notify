import React from 'react'
import { useState } from 'react'

const Input = ({setCards}) => {
    const [cardText, setCardText] = useState("")

    function addCard() {
        setCards(prevCards => [...prevCards, cardText])
        setCardText('')
    }

    return (
        <div>
            <input type="text" placeholder="Enter Your Note" className='m-3 p-1' value={cardText} onChange={(e) => setCardText(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && addCard()} />
            <button className="bg-green-400 p-1 rounded-md" onClick={addCard}>Click Me</button>
        </div>
    )
}

export default Input
