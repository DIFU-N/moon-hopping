import React from 'react'

const CoinItem = (props) => {
  console.log(props.copous);
  return (
    <div className='grid grid-cols-4 p-3 m-3 border'>
      <p>{props.copous.rank}</p>
      <img src={props.copous.iconUrl} className="w-5 h-5" alt="" />
      <p>{props.copous.name}</p>
      <p>{props.copous.price}</p>
      <p>{props.copous.lowVolume}</p>
    </div>
  )
}

export default CoinItem