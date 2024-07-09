// //This file is used to Process the data for the Line chart
import { singleLineChartData,mutiLineData } from './data/lineChart';
import { lineChartColor } from "./color";
//This part is single line chart
export const LinePrimaryXAxis = {
  valueType: 'DateTime',
  labelFormat: 'yyyy',
  edgeLabelPlacement: 'Shift',
  majorGridLines: { width: 0 },
  background: 'white',
};
  
export const LinePrimaryYAxis = {
  labelFormat: '{value}',
  rangePadding: 'None',
  minimum: 0,
  maximum: 400,
  interval: 40,
  lineStyle: { width: 0 },
  majorTickLines: { width: 0 },
  minorTickLines: { width: 0 },
};


export const lineCustomSeries = [
  { dataSource: singleLineChartData[0],
    xName: 'x',
    yName: 'y',
    name: 'ASE',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
    fill: lineChartColor.ASE
  },

  { dataSource: singleLineChartData[1],
    xName: 'x',
    yName: 'y',
    name: 'FSE',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
    fill: lineChartColor.FSE 
  },

  { dataSource: singleLineChartData[2],
    xName: 'x',
    yName: 'y',
    name: 'ICSE',
    width: '2',
    marker: { visible: true, width: 10, height: 10 },
    type: 'Line',
    fill: lineChartColor.ICSE 
  },
]; 

//This part is muti line chart
export const synchronizedData = mutiLineData