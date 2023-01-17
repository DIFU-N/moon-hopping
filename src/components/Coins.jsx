import React from 'react'
import { Link } from 'react-router-dom';
import BestCoins from './BestCoins';
import CoinItem from './CoinItem';
import CoinRoute from './CoinRoute';

const Coins = (props) => {
  console.log(props.loki);
  console.log(props.mis);
  return (
    <div className='m-auto max-w-[1140px]'>

      <div className='text-4xl font-extrabold pb-6 font-serif w-[100%] flex justify-center'>
        TO THE MOON??
      </div>
      <div className='text-2xl font-serif w-[100%] flex justify-center pb-4'>
        Top 3 Right Now
      </div>

      <div className='pb-6  grid items-center justify-center w-[100%]'>
        {props.loki.map(aks => {
          return (
            <BestCoins okayStatCop={aks} />
          )
        })}
      </div>
      <div className='text-2xl font-serif w-[100%] flex justify-center'>
        The Rest of the Moon Goers
      </div>
      {/* find reference to mis in app.js return function */}
      {props.mis.map(loa => {
        return (
          <Link to={`/coinArrayPath/${loa.uuid}`} element={<CoinRoute />} key={loa} >
              {/* copous will be used to get each coin item element in the CoinItem.jsx file */}
              <CoinItem copous={loa} />
          </Link>
        )
      })}
    </div>
  )
}
                             
export default Coins;