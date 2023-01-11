// import React from 'react'
// import { Link } from 'react-router-dom';
// import CoinItem from './CoinItem';
// import CoinRoute from './CoinRoute';

// const Coins = (props) => {
//   return (
//     <div className='m-auto max-w-[1140px]'>
//       <div className='text-4xl font-serif w-[100%] flex justify-center'>
//         To The Moon??
//       </div>

//       {/* find reference to mis in app.js return function */}
//       {props.mis.map(loa => {
//         return (
//           <Link to={`/coinArrayPath/${loa.uuid}`} element={<CoinRoute />} key={loa.uuid} >
//               {/* copous will be used to get each coin item element in the CoinItem.jsx file */}
//               <CoinItem copous={loa} />
//           </Link>
//         )
//       })}
//     </div>
//   )
// }

import React, { Component } from 'react';
import CanvasJSReact from './canvasjs.react.js';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class Coins extends Component {	
	render() {
		const options = {
			animationEnabled: true,
			theme: "light2",
			title:{
				text: "Stock Price of BMW - March 2018"
			},
			axisX:{
				valueFormatString: "DD MMMM YYYY",
				crosshair: {
					enabled: true,
					snapToDataPoint: true
				}
			},
			axisY: {
				title: "Closing Price (in EUR)",
				valueFormatString: "€##0.00",
				crosshair: {
					enabled: true,
					snapToDataPoint: true,
					labelFormatter: function(e) {
						return "€" + CanvasJS.formatNumber(e.value, "##0.00");
					}
				}
			},
			data: [{
				type: "area",
				xValueFormatString: "D M",
				yValueFormatString: "€##0.00",
				dataPoints: [
				  { x: new Date("2018-03-01"), y: 85.3},
				  { x: new Date("2018-03-02"), y: 83.97},
				  { x: new Date("2018-03-05"), y: 83.49},
				  { x: new Date("2018-03-06"), y: 84.16},
				  { x: new Date("2018-03-07"), y: 84.86},
				  { x: new Date("2018-03-08"), y: 84.97},
				  { x: new Date("2018-03-09"), y: 85.13},
				  { x: new Date("2018-03-12"), y: 85.71},
				  { x: new Date("2018-03-13"), y: 84.63},
				  { x: new Date("2018-03-14"), y: 84.17},
				  { x: new Date("2018-03-15"), y: 85.12},
				  { x: new Date("2018-03-16"), y: 85.86},
				  { x: new Date("2018-03-19"), y: 85.17},
				  { x: new Date("2018-03-20"), y: 85.99},
				  { x: new Date("2018-03-21"), y: 86.1},
				  { x: new Date("2018-03-22"), y: 85.33},
				  { x: new Date("2018-03-23"), y: 84.18},
				  { x: new Date("2018-03-26"), y: 85.21},
				  { x: new Date("2018-03-27"), y: 85.81},
				  { x: new Date("2018-03-28"), y: 85.56},
				  { x: new Date("2018-03-29"), y: 88.15}
				]
			}]
		}
		
		return (
		<div>
			<CanvasJSChart options = {options} 
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
 
// module.exports = Coins;                              
export default Coins;