import React, { Component } from 'react'
import LineChart from '../LineChart/LineChart';
import DonutChart from '../DonutChart/DonutChart';
import {makeData} from '../Utility/DataHandling';
import './summary.css';
import {EnergyUsuageAlert} from '../Utility/Alert';
import { connect } from 'react-redux';
import Room from '../Rooms/Room';
import * as d3 from 'd3';


class Summary extends Component {
  constructor(props){
    super(props);
    this.state={
      data:{},
      showWarning:false,
      kitchenUsuage:0.67,
      bedroomUsuage:2.22,
      bathroomUsuage:0.44,
      livingroomUsuage:1.67
    }
  }


  componentWillMount(){
    this.setState({
      data:makeData(5,0.2)
    })
  }

  componentDidMount(){
    const {
      energyThreshold,
      kitchenTemperature,
      livingroomTemperature,
      bathroomTemperature,
      bedroomTemperature,

      kitchenCurrentTemp,
      bedroomCurrentTemp,
      bathroomCurrentTemp,
      livingroomCurrentTemp,  
    } = this.props;

    const updateTemp =(tempTarget,currentTemp)=>{
      return{
        temp1: typeof tempTarget === "number"? tempTarget: tempTarget.temperature,
        temp2: typeof currentTemp === "number"? currentTemp: currentTemp.temperature
      }
    }

    var count=1
    var totalUsuage = 5;
    var kitchenUsageCounter = 0.67;
    var bedroomUsuageCounter = 2.22;
    var bathroomUsageCounter =0.44;
    var livingroomUsageCounter = 1.67;

    var kitchenTemp = updateTemp(kitchenTemperature,kitchenCurrentTemp);
    var bedroomTemp = updateTemp(bedroomTemperature,bedroomCurrentTemp);
    var bathroomTemp = updateTemp(bathroomTemperature,bathroomCurrentTemp);
    var livingroomTemp = updateTemp(livingroomTemperature,livingroomCurrentTemp);
    var needUpdate = (kitchenTemp.temp1+bedroomTemp.temp1+bathroomTemp.temp1+livingroomTemp.temp1)!==
                      (kitchenTemp.temp2+bedroomTemp.temp2+bathroomTemp.temp2+livingroomTemp.temp2)

    this.updateUsuageInterval = setInterval(()=>{

      if(needUpdate){
          count++;
          if(parseInt(kitchenTemp.temp1)!==kitchenTemp.temp2) {
            kitchenUsageCounter=0.67*2;
            this.setState({kitchenUsuage:2*0.67})
          }
          if(parseInt(bedroomTemp.temp1)!==bedroomTemp.temp2){
            bedroomUsuageCounter=2*2.22;
            this.setState({bedroomUsuage:2*2.22})
          } 
          if(parseInt(bathroomTemp.temp1)!==bathroomTemp.temp2) {
            bathroomUsageCounter=2*0.44;
            this.setState({bathroomUsuage:2*0.44})
          }
          if(parseInt(livingroomTemp.temp1)!==livingroomTemp.temp2){
            livingroomUsageCounter=2*1.67;
            this.setState({livingroomUsuage:2*1.67})
          } 

          var usuageData = this.state.data;
          totalUsuage = kitchenUsageCounter+bedroomUsuageCounter+bathroomUsageCounter+livingroomUsageCounter
          usuageData.push({date:new Date(),value:d3.randomNormal(totalUsuage, 0.2)()});
          usuageData.shift();
          this.setState({
            data:usuageData
          })

          if(totalUsuage>energyThreshold){
            this.setState({showWarning:true});
          }
          if(count === 10){
            this.setState({
              kitchenUsuage:0.67,
              bedroomUsuage:2.22,
              bathroomUsuage:0.44,
              livingroomUsuage:1.67
            })
            clearInterval(this.updateUsuageInterval);
            needUpdate=false
          }

      }else{
        clearInterval(this.updateUsuageInterval);
        needUpdate=false;
      } 

    },2000)

    this.showUsuageInterval=setInterval(
        ()=>{
        if(!needUpdate){
          var usuageData = this.state.data;
          usuageData.push({date:new Date(),value:d3.randomNormal(5, 0.2)()});
          usuageData.shift();
          this.setState({
            data:usuageData
          })
          totalUsuage = 5;
          if(totalUsuage<energyThreshold){
            this.setState({showWarning:false});
          }else{
            this.setState({showWarning:true});
          }
        }
      },1000
    )
  }

  componentWillUnmount(){
    clearInterval(this.updateUsuageInterval);
    clearInterval(this.showUsuageInterval);
  }


  render() {
    const {data,kitchenUsuage,bedroomUsuage,bathroomUsuage,livingroomUsuage, showWarning} = this.state;
    var currentUsuage = data[data.length-1].value;
    currentUsuage = Math.round(currentUsuage*100)/100;
    return (
      <div id='summary'>
            <EnergyUsuageAlert showWarning={showWarning}/>
            <div id='charts'>
              <div id="line-chart">
                <LineChart
                    width={800} 
                    height={400}
                    data = {data}
                    range={[2,10]}
                    title={'Overall Energy Consumption'}
                    currentUsuage ={currentUsuage}
                />
              </div>
              <div id='donut-chart'><DonutChart 
                kitchenUsuage={kitchenUsuage}
                bedroomUsuage={bedroomUsuage}
                bathroomUsuage={bathroomUsuage}
                livingroomUsuage={livingroomUsuage}
              /></div>
            </div>

          <div id="status-summary">
            <h2 className='headline'>Temperature Status</h2>
            <Room roomName={"Kitchen"} type="temperature" showChart={false}/>
            <Room roomName={"Bedroom"} type="temperature" showChart={false}/>
            <Room roomName={"Livingroom"} type="temperature" showChart={false}/>
            <Room roomName={"Bathroom"} type="temperature" showChart={false}/>
          </div>

      </div>
    )
  }
}

const mapStateToProps=state=>{
  return{
    energyThreshold: state.energyusage.energyUsageThreshold,
    kitchenTemperature: state.temperature.kitchenTemperature,
    livingroomTemperature: state.temperature.livingroomTemperature,
    bedroomTemperature: state.temperature.bedroomTemperature,
    bathroomTemperature: state.temperature.bathroomTemperature,

    livingroomCurrentTemp:state.temperature.livingroomCurrentTemp,
    bedroomCurrentTemp:state.temperature.bedroomCurrentTemp,
    bathroomCurrentTemp:state.temperature.bathroomCurrentTemp,
    kitchenCurrentTemp:state.temperature.kitchenCurrentTemp,
  }
}

export default connect(mapStateToProps)(Summary);