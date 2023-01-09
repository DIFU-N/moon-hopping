import React from 'react'
import { Link } from 'react-router-dom';
import CoinRoute from './CoinRoute';

const Coins = (props) => {
  return (
    <div className='m-auto max-w-[1140px]'>
      loko

      {/* find reference to mis in app.js return function */}
      {props.mis.map(loa => {
        return (
          <Link to={`/coinArrayPath/${loa.uuid}`} element={<CoinRoute />} key={loa.uuid} >
              
          </Link>
        )
      })}
    </div>
  )
}

export default Coins;