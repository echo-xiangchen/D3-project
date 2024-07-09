/**
 * Bubble sample
 */
import * as React from "react";
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

import { mapColor } from "../../constant/color";
import * as dataMap from "../../constant/map-data/worldmap.json"
import * as data from '../../constant/map-data/bubble-datasource.json';
let datasource = data;
let mapsources = dataMap;
const SAMPLE_CSS = `
    .control-fluid {
        padding: 0px !important;
    }`;
const BubbleMaps = ({internetUsers,toggle}) => {
    let template = '<div id="bubbletooltiptemplate" style="width: 200px;height: auto; background: rgba(53, 63, 76, 0.90); opacity: 90%;background: rgba(53, 63, 76, 0.90);box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.40);padding: 10px;border: 1px #abb9c6;border-radius: 4px;">' 
    + '<div style="font-size:13px;color:#ffffff;font-weight: 500;"><center>${name}</center></div>' 
    + '<hr style="margin-top: 2px;margin-bottom:5px;border:0.5px solid #DDDDDD">' 
    + '<div><span style="font-size:13px;color:#cccccc">Rank : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${rank}</span></div>' 
    + '<div><span style="font-size:13px;color:#cccccc">male : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${male}</span></div>'
    + '<div><span style="font-size:13px;color:#cccccc">female : </span><span style="font-size:13px;color:#ffffff;font-weight: 500;">${female} ( ${percentage}% )</span></div></div>'
    const bubbleRendering = (args) => {
        const bubblesize = (value) => {
            var max = 50;
            var min = 1;
            var maxBox = 10 * 70 * 2 * Math.PI;
            var minBox = 3 * 3 * 2 * Math.PI;
            var box = (value - min) / (max - min) * (maxBox - minBox) + minBox;
            if (box < minBox) {
                box = minBox;
            }
            return Math.sqrt(box / (Math.PI * 2)) / 2;
        }

        args.radius = bubblesize(args.data.female);
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
                        mapsArea={{ background: '#FFF9EE' }}
                        background='#FFF9EE'

                        key={toggle}
                        height="600px"
                        width="1000px"
                        id="maps" 
                        loaded={onMapsLoad} 
                        load={load} 
                        useGroupingSeparator={true} 
                        format={"n"} 
                        zoomSettings={{ 
                            enable: true, 
                            horizontalAlignment: 'Near', 
                            toolBarOrientation: 'Vertical', 
                            toolbars: ['ZoomIn', 'ZoomOut', 'Reset'], 
                            pinchZooming: true 
                        }} 
                        bubbleRendering={bubbleRendering} 
                        >
                        <Inject services={[Bubble, MapsTooltip, Zoom]}/>
                        <LayersDirective>
                            <LayerDirective 
                                shapeData={mapsources} 
                                shapePropertyPath='name' 
                                shapeDataPath='name' 
                                dataSource={datasource} 
                                shapeSettings={{ 
                                    fill: mapColor.island,
                                }}>

                                <BubblesDirective>
                                    <BubbleDirective 
                                        dataSource={internetUsers} 
                                        visible={true} 
                                        valuePath='value' 
                                        colorValuePath='color'
                                        minRadius={3} 
                                        maxRadius={50} 
                                        opacity={0.8} 
                                        tooltipSettings={{ 
                                            visible: true, 
                                            valuePath: 'female', 
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
