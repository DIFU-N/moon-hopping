import CanvasJSReact from './canvasjs.react.js';
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

let dataPointsArray = [];
let sas= ["today", "yesterday", "this_Week", "last_week"],
    gd= [34000, 24000, 157000, 145000];

    for (let i = 0; i < 4; i++) {
    dataPointsArray.push({
        label: sas[i],
        y: gd[i]
    });
}

const alsokoptions = {
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
        title: "Orders",
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
        text: "Order Count"
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
        {<CanvasJSChart options = {alsokoptions} 
    //  onRef={ref => this.chart = ref}
    />}
    <br />
    {<CanvasJSChart options = {alsokoptions2} 
    //  onRef={ref => this.chart = ref}
    />}
    </div>
)