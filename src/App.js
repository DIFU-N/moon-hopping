import { React, useState, useEffect } from "react";
import axios from "axios";
import {Routes, Route} from "react-router-dom";
import Coins from "./components/Coins";
import {apiKey} from "./apiKey.js";
import CoinRoute from "./components/CoinRoute";


function App() {
  const [coin, setCoin] = useState([]);

  const options = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/coins',
    params: {
      referenceCurrencyUuid: 'yhjMzLPhuIDl',
      timePeriod: '24h',
      'tiers[0]': '1',
      orderBy: 'marketCap',
      orderDirection: 'desc',
      limit: '50',
      offset: '0'
    },
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  useEffect(() => {
    axios.request(options).then((response) => {
      setCoin(response.data.data.coins);
      console.log(response.data.data.coins);
    }).catch((error) => {
      console.error(error);
    });
      // this fixes that useEffect dependency issue.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const [money, setMoney] = useState([]);
  // const [moneyStat, setMoneyStat] = useState([]);

  const options2 = {
    method: 'GET',
    url: 'https://coinranking1.p.rapidapi.com/stats',
    params: {referenceCurrencyUuid: 'yhjMzLPhuIDl'},
    headers: {
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
    }
  };

  useEffect(() => {
      axios.request(options2).then(function (response) {
          console.log(response.data.data.bestCoins);
          setMoney(response.data.data.bestCoins);
      }).catch(function (error) {
          console.error(error);
      })        
              // this fixes that useEffect dependency issue.
      // eslint-disable-next-line react-hooks/exhaustive-deps        
  },[])

  return (
    <Routes>
      <Route path='/' element={<Coins mis={coin} loki={money}/>} />
      <Route path="/coinArrayPath" element={<CoinRoute />} >
        <Route path=":uuid" element={<CoinRoute />}/>
      </Route>
    </Routes>
  );
}

export default App;
