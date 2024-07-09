import React from 'react';
import { 
  ChartComponent, 
  SeriesCollectionDirective, 
  SeriesDirective, 
  Inject, 
  Legend, 
  Category, 
  StackingColumnSeries, 
  Tooltip 
} from '@syncfusion/ej2-react-charts';

import { 
  stackedCustomSeries, 
  stackedPrimaryXAxis, 
  stackedPrimaryYAxis 
} from '../../constant';
import { stackChartColor } from '../../constant/color';

const Stacked = ({ width, height }) => {
  return (
    <ChartComponent
      id="charts"
      primaryXAxis={stackedPrimaryXAxis}
      primaryYAxis={stackedPrimaryYAxis}
      width={width}
      height={height}
      chartArea={{ border: { width: 0 } }}
      tooltip={{ 
        enable: true,
        
      }}
      background={stackChartColor.background}
      legendSettings={{ background: '#FFF9EE' }}
    >
      <Inject services={[StackingColumnSeries, Category, Legend, Tooltip]} />
      <SeriesCollectionDirective>
        {stackedCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
      </SeriesCollectionDirective>
    </ChartComponent>
  );
};

export default Stacked;
