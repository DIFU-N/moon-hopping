import axios from "axios";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react'

const CoinRoute = () => {
    const params = useParams();
    // coinArray is the array of information from the api for each coin
    const [coinArray, setCoinArray] = useState({});

    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${params.uuid}/supply`,
        headers: {
            'X-RapidAPI-Key': '86f833605emsh83e174d75b9d92ep101ef3jsn07194cd8227d',
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };

    axios.request(options).then(function (response) {
        console.log(response.data);
        setCoinArray(response.data);
    }).catch(function (error) {
        console.error(error);
    });

  return (
    <div>
        {coinArray.supply.maxAmount}
    </div>
  )
}

export default CoinRoute;