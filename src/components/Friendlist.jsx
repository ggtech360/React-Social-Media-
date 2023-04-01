import React from 'react'
import Profilepic from './Profilepic'

const Friendlist = () => {
  return (
    <div className='flex gap-3 px-8'>
      <div>
        <Profilepic/>
      </div>
      <div>
        <h2 className='font-poppins text-xl font-semibold'>Jhon Doe</h2>
        <p className='leading-3 text-gray-500'>6 Mutual Friends</p>
      </div>
    </div>
  )
}

export default Friendlist
