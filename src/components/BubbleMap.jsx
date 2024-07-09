/**
 * Bubble sample
 */
import * as React from "react";
import { MapAjax } from '@syncfusion/ej2-maps';
import { 
    MapsComponent, 
    Inject, 
    LayersDirective, 
    LayerDirective, 
    Bubble, 
    BubblesDirective, 
    BubbleDirective, 
    MapsTooltip, 
    Zoom 
} from '@syncfusion/ej2-react-maps';

//import { internetUsers } from '../constant/mapChartDP';
import * as data from '../constant/map-data/bubble-datasource.json';
let datasource = data;
const SAMPLE_CSS = `
    .control-fluid {
		padding: 0px !important;
    }`;
const BubbleMaps = ({internetUsers,toggle}) => {
    let template = '<div id="bubbletooltiptemplate" style="width: 165px;background: rgba(53, 63, 76, 0.90); opacity: 90%;background: rgba(53, 63, 76, 0.90);box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);padding: 10px;border: 1px #abb9c6;border-radius: 4px;">' 
    + '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${name}</center></div>' 
    + '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">' 
    + '<div><span style="font-size:13px;color:#cccccc">Rank : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${rank}</span></div>' 
    + '<div><span style="font-size:13px;color:#cccccc">male : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${male}</span></div>'
    + '<div><span style="font-size:13px;color:#cccccc">female : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${female}</span></div></div>';
    const bubbleRendering = (args) => {
        args.radius = args.data.value;
    };
    const onMapsLoad = () => {
        let maps = document.getElementById('maps');
        maps.setAttribute('title', '');
    };
    const load = (args) => {
    };
    return (
        <div className='control-pane'>
            <style>{SAMPLE_CSS}</style>
            <div className='control-section row '>
                <div className='col-md-12'>
                    <MapsComponent 
                        key={toggle}
                        height="600px"
                        width="2000px"
                        id="maps" 
                        loaded={onMapsLoad} 
                        load={load} 
                        useGroupingSeparator={true} 
                        format={"n"} 
                        zoomSettings={{ 
                            enable: false, 
                            horizontalAlignment: 'Near', 
                            toolBarOrientation: 'Vertical', 
                            toolbars: ['ZoomIn', 'ZoomOut', 'Reset'], 
                            pinchZooming: true 
                        }} 
                        bubbleRendering={bubbleRendering} 
                        // titleSettings={{ 
                        //     text: 'Top 30 countries with highest Internet users', 
                        //     textStyle: { size: '16px' } 
                        //     }}
                        >
                        <Inject services={[Bubble, MapsTooltip, Zoom]}/>
                        <LayersDirective>
                            <LayerDirective 
                                shapeData={new MapAjax('https://ej2.syncfusion.com/react/demos/src/maps/map-data/world-map.json')} 
                                shapePropertyPath='name' 
                                shapeDataPath='name' 
                                dataSource={datasource} 
                                shapeSettings={{ fill: '#E5E5E5' }}>

                                <BubblesDirective>
                                    <BubbleDirective 
                                        dataSource={internetUsers} 
                                        visible={true} 
                                        valuePath='value' 
                                        colorValuePath='color' 
                                        minRadius={3} 
                                        maxRadius={70} 
                                        opacity={0.8} 
                                        tooltipSettings={{ 
                                            visible: true, 
                                            valuePath: 'male', 
                                            template: template 
                                        }}/>
                                </BubblesDirective>
                            </LayerDirective>
                        </LayersDirective>
                    </MapsComponent>
                </div>
            </div>
        </div>);
};


export default BubbleMaps;