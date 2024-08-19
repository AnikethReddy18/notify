import React from 'react'

const Navbar = () => {
  return (
    <nav className='bg-green-300 p-5'>
      <div className="container flex justify-between">
        <div className='flex '>
          <img src="/logo.png" alt="" width={40} />
          <span className='font-bold text-3xl my-auto mx-2'>Notify!</span>
        </div>
      <div className='flex gap-5 text-xl p-1'>
        <a href="#" className=' hover:text-amber-600'>About</a>
        <a href="#" className=' hover:text-amber-600'>Contribute</a>
      </div> 
      </div>
    </nav>
  )
}

export default Navbar
