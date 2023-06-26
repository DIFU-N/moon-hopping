import axios from "axios";
import { useParams } from "react-router-dom";
import React, {useEffect, useState} from 'react';
//and dont't you forget it. 
import {apiKey} from "../apiKey.js";
import CanvasJSReact from './canvasjs.react.js';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

const CoinRoute = (prop) => {
    console.log(prop.alsoThis);
    const [data, setData] = useState(null)
    const params = useParams();
    // coinArray is the array of information from the api for each coin
    const [coinArray, setCoinArray] = useState({
        history:[]
    });
    // 👇️ objects/arrays are different on re-renders
    const options = {
        method: 'GET',
        url: `https://coinranking1.p.rapidapi.com/coin/${params.uuid}/history`,
        params: {referenceCurrencyUuid: 'yhjMzLPhuIDl', timePeriod: '3m'},
        headers: {
            'X-RapidAPI-Key': apiKey,
            'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
        }
    };
    
    useEffect(() => {
        axios.request(options).then(function (response) {
            // console.log(response.data);
            setCoinArray(response.data.data);
        }).catch(function (error) {
            console.error(error);
        });
                    // this fixes that useEffect dependency issue.
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
    const coinHistory = coinArray.history;
    // console.log(coinArray);

    useEffect(() => {
        doAction()
                    // this fixes that useEffect dependency issue.
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [coinHistory])
    
    let doAction = ()=>{
        // console.log(coinHistory);
        let historyPrice = [],
            historyTimestamp = [];
        // forEach instead of map because you don't need the returned array 
        coinHistory.forEach((person) => {
            historyPrice.push(person.price)
            historyTimestamp.push(person.timestamp)
        });
        // console.log(1)
        // console.log('historyPrice: '+ historyPrice[2]);
        // console.log('historyTime: ' +historyTimestamp[2]);	
        let realTime = [];
        // console.log(1.5)
        historyTimestamp.forEach((time) => {
            let date = new Date(time);
            // console.log(date);
            // let dateFormat = date.getHours() + ": " + date.getMinutes() + ": " + date.getSeconds() + ": " + date.getMilliseconds();
            // return 
            realTime.push(date);
        });
        // console.log(2)
        // let t = new Date(historyTimestamp[2]);
        // console.log(realTime);
        let historyPriceFlt = [];
        historyPrice.forEach((price) => {
            // return 
            historyPriceFlt.push(parseFloat(price));
        });
        // console.log(3)
        // console.log(historyPriceFlt);
        // console.log(typeof(historyPrice[1]));
        
        let dataPointsArray = [];
        // for (var i = 0; i < 273; i++) {
        //     dataPointsArray.push({
        //         x: realTime[i],
        //         y: historyPriceFlt[i]
        //     });
        // }
        let sas= ["today", "yesterday", "this_Week", "last_week"],
        gd= [34000, 24000, 157000, 145000];
        for (let i = 0; i < 4; i++) {
            dataPointsArray.push({
                label: sas[i],
                y: gd[i]
            });
        }
        // console.log(4)
        // console.log(dataPointsArray);
        const graphOptions = {
            // animationEnabled: true,
            // theme: "light2",
            // title:{
            //     // text: `Price History for ` + props.alsoMis[]
            // },
            // axisX:{
            //     valueFormatString: "HH:m:ss",
            //     crosshair: {
            //         enabled: true,
            //         snapToDataPoint: true
            //     }
            // },
            axisY: {
                title: "Price (in NGN)",
                valueFormatString: "$##0.00",
                crosshair: {
                    enabled: true,
                    snapToDataPoint: true,
                    labelFormatter: function(e) {
                        return "$" + CanvasJS.formatNumber(e.value, "#####0.00");
                    }
                }
            },
            // data: [{
            //     type: "area",
            //     xValueFormatString: "HH:m:ss",
                // yValueFormatString: "$#0.00",
            //     dataPoints: dataPointsArray,
            // }]
            title: {
				text: "Sales Count"
			},
			data: [
			{
				// Change type to "doughnut", "line", "splineArea", etc.
				type: "column",
                yValueFormatString: "$####0.00",
                dataPoints: dataPointsArray
			}
			]
        }
        // console.log(5)
        console.log(graphOptions)
        setData(graphOptions)
    }

    let dataPointsArray2 = [];
    let sas2= ["today", "yesterday", "this_Week", "last_week"],
        gd2= [34, 24, 157, 145];
    
        for (let i = 0; i < 4; i++) {
        dataPointsArray2.push({
            label: sas2[i],
            y: gd2[i]
        });
    }
    
    
const alsokoptions2 = {
    axisY: {
        title: "Order Count",
        valueFormatString: "0.00",
        // crosshair: {
        //     enabled: true,
        //     snapToDataPoint: true,
        //     labelFormatter: function(e) {
        //         return "$" + CanvasJS.formatNumber(e.value, "#####0.00");
        //     }
        // }
    },
    title: {
        text: "Orders"
    },
    data: [
    {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        yValueFormatString: "0.00",
        dataPoints: dataPointsArray2
    }
    ]
}

    return (
        <div>
            <div>
                {<CanvasJSChart options = {data} 
                    //  onRef={ref => this.chart = ref}
                />}
                <br />
                {<CanvasJSChart options = {alsokoptions2} 
                    //  onRef={ref => this.chart = ref}
                />}
                {/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
            </div>
        </div>
    );
}
// 
export default CoinRoute;