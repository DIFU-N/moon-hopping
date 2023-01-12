import axios from "axios";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
//and dont't you forget it. 
import {apiKey} from "../apiKey.js";

const CoinRoute = () => {
    const params = useParams();
    // coinArray is the array of information from the api for each coin
    const [coinArray, setCoinArray] = useState({});
    // 👇️ objects/arrays are different on re-renders
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
            console.log(response.data.data);
            setCoinArray(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });
                    // this fixes that useEffect dependency issue.
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    console.log(coinArray.history);
    let historyPrice = [],
        historyTimestamp = [];
    coinArray.history.map((person) => {
        return (
            historyPrice.push(person.price),
            historyTimestamp.push(person.timestamp)
        );
    });
    console.log('historyPrice: '+ historyPrice[2]);
    console.log('historyTime: ' +historyTimestamp[2]);
    
  return (
    <div>
        {/* <h1>{coinArray.data.supply.totalAmount}</h1> */}

    </div>
  )
}

export default CoinRoute;