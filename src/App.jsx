import './index.css'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Card from './components/Card'
import Input from './components/Input'

function App() {
  const [cards, setCards] = useState([])

  return (
    <>
      <div className='bg-pattern'>
        <Navbar />
        <Input setCards={setCards}/>
        {cards.map((card, index) => <Card text={card} key={index}/>)}
      </div>
    </>
  )
}

export default App
