import React from 'react'

const Card = ({children, noPadding, marginTop}) => {
  let card = 'font-medium w-full mb-2 bg-white shadow-gray-400 rounded-md shadow-md'
  if (!noPadding){
    card += ' p-3 lg:px-4'
  }
  if (marginTop){
    card += ' mt-4'
  }
  return (
  <div className={card}>
      {children}
    </div>
  )
}

export default Card
