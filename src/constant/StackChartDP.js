//This file is used to Process the data for the stacked bar chart
import { stackedData } from './data/stack';
import { stackChartColor } from "./color";

export const stackedCustomSeries = [
    { dataSource: stackedData[0],
        xName: 'x',
        yName: 'y',
        name: 'Female',
        type: 'StackingColumn',
        background: 'red',
        fill: stackChartColor.female,

    },
    { dataSource: stackedData[1],
        xName: 'x',
        yName: 'y',
        name: 'Male',
        type: 'StackingColumn',
        background: 'blue',
        fill: stackChartColor.male,

    },
];

export const stackedPrimaryXAxis = {
    majorGridLines: { width: 0 },
    minorGridLines: { width: 0 },
    majorTickLines: { width: 0 },
    minorTickLines: { width: 0 },
    interval: 1,
    lineStyle: { width: 0 },
    labelIntersectAction: 'Rotate0',
    valueType: 'Category',
};

export const stackedPrimaryYAxis = {
    lineStyle: { width: 0 },
    minimum: 0,
    maximum: 10000,
    interval: 1000,
    majorTickLines: { width: 0 },
    majorGridLines: { width: 1 },
    minorGridLines: { width: 1 },
    minorTickLines: { width: 0 },
    labelFormat: '{value}',
};
