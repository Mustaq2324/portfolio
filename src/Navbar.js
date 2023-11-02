import React from 'react'

function Navbar() {
  return (
    <div>
        <div className='bg-orange-400 p-4  gap-4'>
            <h1 className='text-4xl  font-bold gap-4'>Harish Folio</h1>
            <ul className='text-xl flex flex-col gap-3 mt-7'>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>SERVICES</li>
                <li>WORK</li>
                <li>CONTACT</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar