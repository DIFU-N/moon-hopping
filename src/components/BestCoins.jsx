import React from 'react'

const BestCoins = (props) => {
  return (
    <div className='grid grid-cols-2 w-72 p-3 border'>
        <img src={props.okayStatCop.iconUrl} className="w-5 h-5" alt=""/>
        <p>{props.okayStatCop.name}</p>
    </div>
  )
}

export default BestCoins