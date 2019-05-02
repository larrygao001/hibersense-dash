import React, { Component } from "react";
import PlotChart from "./PlotChart";
import './linechart.css';

class LineChart extends Component {

  render() {
    
    const {width,height,title,data,range,type, currentUsuage} = this.props;
    var labelY=" ",labelX="Time";
    type==='temperature'?labelY="Temperature(°F)":labelY="Energy Usuage(KWh)";
    return (
      <div  className="LineChartComponent">
        <h3 id="title">{title}</h3>
        {currentUsuage&&<h6 id="usuage">{currentUsuage}   KWh</h6>}
        {data ? (
          <div>
            <p className='labelY'>{labelY}</p>
            <div id="line-chart">
              <PlotChart
                data={data}
                width={width}
                height={height}
                xFn={d => d.date}
                yFn={d => d.value}
                yDomain={range}
                margin={{ top: 20, left: 50, bottom: 20, right: 20 }}
              />
              <p className='labelX'>{labelX}</p>
            </div>
            
          </div>
        ) : (
          <p>Data Not found.</p>
        )}
      </div>
    );
  }
}
export default LineChart;
