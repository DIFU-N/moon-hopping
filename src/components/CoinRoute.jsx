import axios from "axios";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react'
import {apiKey} from "./apiKey.js";

const CoinRoute = () => {
    const params = useParams();
    // coinArray is the array of information from the api for each coin
    const [coinArray, setCoinArray] = useState({});

    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${params.uuid}/history`,
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '24h'},
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
      
    useEffect(() => {
        axios.request(options).then(function (response) {
            console.log(response.data);
            setCoinArray(response.data);
        }).catch(function (error) {
            console.error(error);
        });
    }, [])

    console.log(coinArray.data.supply.totalAmount);
  return (
    <div>
        <h1>{coinArray.data.supply.totalAmount}</h1>

    </div>
  )
}

export default CoinRoute;