import * as React from 'react';
import { useEffect } from 'react';
import { 
    AreaSeries, 
    LineSeries, 
    DateTime, 
    DataLabel, 
    Tooltip, 
    Highlight, 
    Crosshair, 
    Zoom, 
    Legend, 
    Selection, 
    ChartComponent, 
    SeriesCollectionDirective, 
    SeriesDirective, 
    Inject 
} from '@syncfusion/ej2-react-charts';

import { synchronizedData } from '../../constant/LineChartDP';
import { Browser } from '@syncfusion/ej2/base';
import { synchronizedChartColor } from '../../constant/color';
let SAMPLE_CSS = `
#control-container {
    padding: 1px !important;
}

.row {
    display: flex;
}

.col {
    width: 50%;
    margin: 10px;
    height: 270px;
}`;
/**
 * Synchronized Chart Sample
 */
let SynchronizedChart = () => {
    let chart1;
    let chart2;
    let chart3;
    let chart4;
    let charts = [];
    useEffect(() => {
        charts = [chart1, chart2, chart3, chart4];
    }, []);
    let zoomFactor = 0;
    let zoomPosition = 0;
    let isZoom = false;
    let selectedData = [];
    let count = 0;
    let legendCount = 0;
    let load = (args) => {
        args.chart.primaryXAxis.labelRotation = Browser.isDevice ? -45 : 0;
        // check the container
        if (args.chart.element.id === 'container1') {
            args.chart.series[0].fill = synchronizedChartColor.TotalStatic;
        }
        else if (args.chart.element.id === 'container2') {
            args.chart.series[0].fill = synchronizedChartColor.ASE;
        }
        else if (args.chart.element.id === 'container3') {
            args.chart.series[0].fill = synchronizedChartColor.FSE;
        }
        else if (args.chart.element.id === 'container4') {
            args.chart.series[0].fill = synchronizedChartColor.ICSE;
        }
    };
    const onChartLoad = (args) => {
        let chart = document.getElementById('container1');
        chart.setAttribute('title', '');
    };
    const onChartLoad2 = (args) => {
        let chart = document.getElementById('container2');
        chart.setAttribute('title', '');
    };
    const onChartLoad3 = (args) => {
        let chart = document.getElementById('container3');
        chart.setAttribute('title', '');
    };
    const onChartLoad4 = (args) => {
        let chart = document.getElementById('container4');
        chart.setAttribute('title', '');
    };
    let zoomComplete = (args) => {
        if (args.axis.name === 'primaryXAxis') {
            zoomFactor = args.currentZoomFactor;
            zoomPosition = args.currentZoomPosition;
            zoomCompleteFunction(args);
        }
    };
    //同步4个图的缩放
    let zoomCompleteFunction = (args) => {
        for (let i = 0; i < charts.length; i++) {
            if (args.axis.series[0].chart.element.id !== charts[i].element.id) {
                charts[i].primaryXAxis.zoomFactor = zoomFactor;
                charts[i].primaryXAxis.zoomPosition = zoomPosition;
                charts[i].zoomModule.isZoomed = args.axis.series[0].chart.zoomModule.isZoomed;
                charts[i].zoomModule.isPanning = args.axis.series[0].chart.zoomModule.isPanning;
            }
        }
    };
    //同步四个图鼠标离开
    let chartMouseLeave = (args) => {
        chart2.hideCrosshair();
        chart3.hideCrosshair();
        chart4.hideCrosshair();
        chart2.hideTooltip();
        chart3.hideTooltip();
        chart4.hideTooltip();
    };
    //在多个图表之间协调鼠标移动事件的处理
    let chartMouseMove = (args) => {
        if ((!Browser.isDevice && !chart1.isTouch && !chart1.isChartDrag) || chart1.startMove) {
            chart2.startMove = chart3.startMove = chart4.startMove = chart1.startMove;
            chart2.showTooltip(args.x, args.y);
            chart3.showTooltip(args.x, args.y);
            chart4.showTooltip(args.x, args.y);
            chart2.showCrosshair(args.x, args.y);
            chart3.showCrosshair(args.x, args.y);
            chart4.showCrosshair(args.x, args.y);
        }
    };
    let chartobjMouseLeave = (args) => {
        chart1.hideCrosshair();
        chart3.hideCrosshair();
        chart4.hideCrosshair();
        chart1.hideTooltip();
        chart3.hideTooltip();
        chart4.hideTooltip();
    };
    let chartobjMouseMove = (args) => {
        if ((!Browser.isDevice && !chart2.isTouch && !chart2.isChartDrag) || chart2.startMove) {
            chart1.startMove = chart3.startMove = chart4.startMove = chart2.startMove;
            chart1.showTooltip(args.x, args.y);
            chart3.showTooltip(args.x, args.y);
            chart4.showTooltip(args.x, args.y);
            chart1.showCrosshair(args.x, args.y);
            chart3.showCrosshair(args.x, args.y);
            chart4.showCrosshair(args.x, args.y);
        }
    };
    let chart3MouseLeave = (args) => {
        chart2.hideCrosshair();
        chart1.hideCrosshair();
        chart4.hideCrosshair();
        chart2.hideTooltip();
        chart1.hideTooltip();
        chart4.hideTooltip();
    };
    let chart3MouseMove = (args) => {
        if ((!Browser.isDevice && !chart3.isTouch && !chart3.isChartDrag) || chart3.startMove) {
            chart1.startMove = chart2.startMove = chart4.startMove = chart3.startMove;
            chart1.showTooltip(args.x, args.y);
            chart2.showTooltip(args.x, args.y);
            chart4.showTooltip(args.x, args.y);
            chart1.showCrosshair(args.x, args.y);
            chart2.showCrosshair(args.x, args.y);
            chart4.showCrosshair(args.x, args.y);
        }
    };
    let chart4MouseLeave = (args) => {
        chart2.hideCrosshair();
        chart3.hideCrosshair();
        chart1.hideCrosshair();
        chart2.hideTooltip();
        chart3.hideTooltip();
        chart1.hideTooltip();
    };
    let chart4MouseMove = (args) => {
        if ((!Browser.isDevice && !chart4.isTouch && !chart4.isChartDrag) || chart4.startMove) {
            chart1.startMove = chart2.startMove = chart3.startMove = chart4.startMove;
            chart1.showTooltip(args.x, args.y);
            chart2.showTooltip(args.x, args.y);
            chart3.showTooltip(args.x, args.y);
            chart1.showCrosshair(args.x, args.y);
            chart2.showCrosshair(args.x, args.y);
            chart3.showCrosshair(args.x, args.y);
        }
    };
    let chartMouseUp = (args) => {
        if (Browser.isDevice && chart1.startMove) {
            chart2.hideCrosshair();
            chart3.hideCrosshair();
            chart4.hideCrosshair();
            chart2.hideTooltip();
            chart3.hideTooltip();
            chart4.hideTooltip();
        }
    };
    let chart2MouseUp = (args) => {
        if (Browser.isDevice && chart2.startMove) {
            chart1.hideCrosshair();
            chart3.hideCrosshair();
            chart4.hideCrosshair();
            chart1.hideTooltip();
            chart3.hideTooltip();
            chart4.hideTooltip();
        }
    };
    let chart3MouseUp = (args) => {
        if (Browser.isDevice && chart3.startMove) {
            chart2.hideCrosshair();
            chart1.hideCrosshair();
            chart4.hideCrosshair();
            chart2.hideTooltip();
            chart1.hideTooltip();
            chart4.hideTooltip();
        }
    };
    let chart4MouseUp = (args) => {
        if (Browser.isDevice && chart4.startMove) {
            chart2.hideCrosshair();
            chart3.hideCrosshair();
            chart1.hideCrosshair();
            chart2.hideTooltip();
            chart3.hideTooltip();
            chart1.hideTooltip();
        }
    };

    const chartPrimaryXAxis = {
        minimum: new Date(2013, 10, 29),
        maximum: new Date(2023, 1, 18),
        valueType: 'DateTime',
        labelFormat: 'yyyy',
        labelStyle: { color: synchronizedChartColor.xAxis },
        lineStyle: { width: 0 },
        majorGridLines: { width: 0 },
        edgeLabelPlacement: Browser.isDevice ? 'None' : 'Shift',
        labelRotation: Browser.isDevice ? -45 : 0,
        interval: Browser.isDevice ? 2 : 1
    }


    const chartPrimaryYAxis = {
        labelFormat: '{value}%',
        labelStyle: { color: synchronizedChartColor.yAxis },
        majorTickLines: { width: 0 },
        lineStyle: { width: 0 },
        minimum: 0,
        maximum: 50,
        interval: 10
    }

    const zoomSetting = {
        enableMouseWheelZooming: true,
        enablePinchZooming: true,
        enableScrollbar: false,
        enableDeferredZooming: false,
        enablePan: true,
        mode: 'X',
        toolbarItems: ['Pan', 'Reset']
    }
    const width = "600px";
    return (
        <div className="control-pane">
        <style>{SAMPLE_CSS}</style>
            <div className="control-section">
                <div className="row">
                    <div className="col">
                        <ChartComponent 
                            id="container1"
                            width={width} 
                            ref={chart => chart1 = chart} 
                            style={{ textAlign: 'center' }} 
                            primaryXAxis={chartPrimaryXAxis}       
                            primaryYAxis={chartPrimaryYAxis} 
                            chartArea={{ border: { width: 0 } }} 
                            zoomSettings={zoomSetting} 
                            zoomComplete={zoomComplete.bind(this)} 
                            chartMouseLeave={chartMouseLeave.bind(this)} 
                            chartMouseMove={chartMouseMove.bind(this)} 
                            chartMouseUp={chartMouseUp.bind(this)} 
                            load={load.bind(this)} 
                            loaded={onChartLoad.bind(this)} 
                            titleStyle={{ textAlignment: 'Near' }} 
                            tooltip={{ 
                                enable: true, 
                                fadeOutDuration: Browser.isDevice ? 2500 : 1000, 
                                shared: true, 
                                header: '', 
                                format: '<b>Female:${point.y}</b><br>${point.x}', 
                                enableMarker: false 
                            }} 
                            crosshair={{ 
                                enable: true, 
                                lineType: 'Vertical', 
                                dashArray: '2,2' 
                            }} 
                            title="Overall">
                                <Inject services={[AreaSeries, LineSeries, DataLabel, DateTime, Tooltip, Zoom, Highlight, Legend, Selection, Crosshair]}/>
                                <SeriesCollectionDirective>
                                    <SeriesDirective 
                                        type="Line" 
                                        dataSource={synchronizedData} 
                                        xName="date" 
                                        yName="TOTAL" 
                                        width={2} 
                                        emptyPointSettings={{ mode: 'Drop' }}>   
                                    </SeriesDirective>
                                </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                    
                    <div className="col">
                        <ChartComponent 
                            id="container2"
                            width={width} 
                            ref={chart => chart2 = chart} 
                            style={{ textAlign: 'center' }} 
                            primaryXAxis={chartPrimaryXAxis} 
                            primaryYAxis={chartPrimaryYAxis} 
                            chartArea={{ border: { width: 0 } }} 
                            zoomSettings={zoomSetting} 
                            zoomComplete={zoomComplete.bind(this)} 
                            chartMouseLeave={chartobjMouseLeave.bind(this)} 
                            chartMouseMove={chartobjMouseMove.bind(this)} 
                            chartMouseUp={chart2MouseUp.bind(this)} 
                            load={load.bind(this)} 
                            loaded={onChartLoad2.bind(this)} 
                            titleStyle={{ textAlignment: 'Near' }} 
                            tooltip={{ 
                                enable: true, 
                                fadeOutDuration: Browser.isDevice ? 2500 : 1000, 
                                shared: true, 
                                header: '', 
                                format: '<b>Female:${point.y}</b><br>${point.x}', 
                                enableMarker: false 
                            }} 
                            crosshair={{ 
                                enable: true, 
                                lineType: 'Vertical', 
                                dashArray: '2,2' 
                            }} 
                            title="ASE">
                            <Inject services={[AreaSeries, LineSeries, DataLabel, DateTime, Tooltip, Zoom, Highlight, Legend, Selection, Crosshair]}/>
                            <SeriesCollectionDirective>
                                <SeriesDirective 
                                    type="Line" 
                                    dataSource={synchronizedData} 
                                    xName="date" 
                                    yName="ASE" 
                                    width={2}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                </div>
                <div className="row">
                    <div className="col">
                        <ChartComponent 
                            id="container3" 
                            width={width}
                            ref={chart => chart3 = chart}
                            style={{ textAlign: 'center' }} 
                            primaryXAxis={chartPrimaryXAxis} 
                            primaryYAxis={chartPrimaryYAxis} 
                            chartArea={{ border: { width: 0 } }} 
                            zoomSettings={zoomSetting} 
                            zoomComplete={zoomComplete.bind(this)}
                            chartMouseLeave={chart3MouseLeave.bind(this)} 
                            chartMouseMove={chart3MouseMove.bind(this)} 
                            chartMouseUp={chart3MouseUp.bind(this)} 
                            load={load.bind(this)} 
                            loaded={onChartLoad3.bind(this)} 
                            titleStyle={{ textAlignment: 'Near' }} 
                            tooltip={{ 
                                enable: true, 
                                fadeOutDuration: Browser.isDevice ? 2500 : 1000, 
                                shared: true, 
                                header: '', 
                                format: '<b>Female:${point.y}</b><br>${point.x}', 
                                enableMarker: false }} 
                                crosshair={{ 
                                    enable: true, 
                                    lineType: 'Vertical', 
                                    dashArray: '2,2' 
                                }} 
                                title="FSE">
                            <Inject services={[AreaSeries, LineSeries, DataLabel, DateTime, Tooltip, Zoom, Highlight, Legend, Selection, Crosshair]}/>
                            <SeriesCollectionDirective>
                                <SeriesDirective 
                                    type="Line" 
                                    dataSource={synchronizedData} 
                                    xName="date" 
                                    yName="FSE" 
                                    opacity={0.6} 
                                    width={2} 
                                    border={{ width: 2 }}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                    <div className="col">
                        <ChartComponent 
                            id="container4" 
                            width={width}
                            ref={chart => chart4 = chart}
                            style={{ textAlign: 'center' }} 
                            primaryXAxis={chartPrimaryXAxis} 
                            primaryYAxis={chartPrimaryYAxis} 
                            chartArea={{ border: { width: 0 } }} 
                            zoomSettings={zoomSetting} 
                            zoomComplete={zoomComplete.bind(this)} 
                            chartMouseLeave={chart4MouseLeave.bind(this)} 
                            chartMouseMove={chart4MouseMove.bind(this)} 
                            chartMouseUp={chart4MouseUp.bind(this)} 
                            load={load.bind(this)} 
                            loaded={onChartLoad4.bind(this)} 
                            titleStyle={{ textAlignment: 'Near' }} 
                            tooltip={{ 
                                enable: true, 
                                fadeOutDuration: Browser.isDevice ? 2500 : 1000, 
                                shared: true, header: '',
                                format: '<b>Female:${point.y}</b><br>${point.x}', 
                                enableMarker: false }} 
                                crosshair={{ 
                                    enable: true, 
                                    lineType: 'Vertical', 
                                    dashArray: '2,2' 
                                }} 
                                title="ICSE">
                            <Inject services={[AreaSeries, LineSeries, DataLabel, DateTime, Tooltip, Zoom, Highlight, Legend, Selection, Crosshair]}/>
                            <SeriesCollectionDirective>
                                <SeriesDirective 
                                    type="Line" 
                                    dataSource={synchronizedData} 
                                    xName="date" 
                                    yName="ICSE"
                                    opacity={0.6} 
                                    width={2} 
                                    border={{ width: 2 }}>
                                </SeriesDirective>
                            </SeriesCollectionDirective>
                        </ChartComponent>
                    </div>
                </div>
            </div>
        </div>);
};

export default SynchronizedChart;
