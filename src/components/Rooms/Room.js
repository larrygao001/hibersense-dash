
import React, { Component } from 'react'
import LineChart from '../LineChart/LineChart';
import {connect} from 'react-redux';
import {makeData} from '../Utility/DataHandling';
import * as d3 from "d3";
import {
  changeBathroomTemp,
  changeLivingroomTemp,
  changeKitchenTemp,
  changeBedroomTemp,
} from '../store/actions/temperatureSettingAction';

class Room extends Component {
  constructor(props){
    super(props);
    this.state={
      temperatureData:{},
      status:"Idle"
    }
  }

  componentWillMount(){
    const {
      roomName,
      kitchenCurrentTemp,
      bedroomCurrentTemp,
      bathroomCurrentTemp,
      livingroomCurrentTemp} = this.props;
    //prefill data

    const fillData=currentTemp=>{
      this.setState({
        temperatureData:makeData(currentTemp,0.2)
      })
    }
    if(roomName==="Kitchen") fillData(kitchenCurrentTemp);
    if(roomName==="Bedroom") fillData(bedroomCurrentTemp);
    if(roomName==="Livingroom") fillData(livingroomCurrentTemp);
    if(roomName==="Bathroom") fillData(bathroomCurrentTemp);
  }
  
  componentDidMount(){
    const {
      roomName, 

      kitchenTemperature,
      livingroomTemperature,
      bathroomTemperature,
      bedroomTemperature,

      kitchenCurrentTemp,
      bedroomCurrentTemp,
      bathroomCurrentTemp,
      livingroomCurrentTemp,  
    } = this.props;

    var tempTarget =(function(){
      if(roomName==="Kitchen") return kitchenTemperature;
      if(roomName==="Livingroom") return livingroomTemperature;
      if(roomName==="Bedroom") return bedroomTemperature;
      if(roomName==="Bathroom")return bathroomTemperature;
    })();

    tempTarget = typeof tempTarget === "number"? tempTarget: tempTarget.temperature;

    var currentTemp =(function(){
      if(roomName==="Kitchen") return kitchenCurrentTemp;
      if(roomName==="Livingroom") return livingroomCurrentTemp;
      if(roomName==="Bedroom") return bedroomCurrentTemp;
      if(roomName==="Bathroom")return bathroomCurrentTemp;
    })();


    currentTemp = typeof currentTemp === "number"? currentTemp: currentTemp.temperature;

    const tempDiff = tempTarget - currentTemp;

    //set room status: cooling/heating/idle
    if(tempDiff>0){
      this.setState({status:"Heating"})
    }else if(tempDiff <0){
      this.setState({status:"Cooling"})
    }else{
      this.setState({status:"Idle"})
    };


    this.showTempInterval = setInterval(()=>{
      if(currentTemp === tempTarget){
          var data = this.state.temperatureData;
          data.push({date:new Date(),value:d3.randomNormal(currentTemp, 0.2)()});
          data.shift();

          this.setState({
            temperatureData:data,
            status:"idle"
          })
      }},1000)

    this.changeTempInterval = setInterval(()=>{
      if(currentTemp!==tempTarget){
        if(roomName==="Kitchen") {

          currentTemp=Math.round((currentTemp+tempDiff/10)*10)/10;
          changeKitchenTemp(currentTemp);
          var kitchenData = this.state.temperatureData;

          kitchenData.push({date:new Date(),value:d3.randomNormal(currentTemp, 0.2)()});
          kitchenData.shift();
          this.setState({
            temperatureData:kitchenData
          })
        }
        if(roomName==="Bedroom") {
          currentTemp=Math.round((currentTemp+tempDiff/10)*10)/10;
          changeBedroomTemp(currentTemp);
          var bedroomData = this.state.temperatureData;
          bedroomData.push({date:new Date(),value:d3.randomNormal(currentTemp, 0.2)()});
          bedroomData.shift();
          this.setState({
            temperatureData:bedroomData
          })
        }
        if(roomName==="Bathroom") {
          currentTemp=Math.round((currentTemp+tempDiff/10)*10)/10;
          changeBathroomTemp(currentTemp);
          var bathroomData = this.state.temperatureData;
          bathroomData.push({date:new Date(),value:d3.randomNormal(currentTemp, 0.2)()});
          bathroomData.shift();
          this.setState({
            temperatureData:bathroomData
          })
        }
        if(roomName==="Livingroom") {
          currentTemp=Math.round((currentTemp+tempDiff/10)*10)/10;
          changeLivingroomTemp(currentTemp);
          var livingroomData = this.state.temperatureData;
          livingroomData.push({date:new Date(),value:d3.randomNormal(currentTemp, 0.2)()});
          livingroomData.shift();
          this.setState({
            temperatureData:livingroomData
          })
        }
  
        tempTarget = Math.round(tempTarget*10)/10;
        
        if(currentTemp === tempTarget){
          clearInterval(this.changeTempInterval);
        }
      }
    },1000)

  }

  componentWillUnmount(){
    clearInterval(this.changeTempInterval);
    clearInterval(this.showTempInterval);
  }

  render() {
    const {roomName,type, showChart} =this.props;
    const {
      temperatureData,
      status
    } = this.state;

    
    var Temperature = temperatureData[temperatureData.length-1].value;
    Temperature = Math.round(Temperature*100)/100;
    return (
      <div className='room'>
          <h1>{roomName}</h1>
          <h4>Temperature: {Temperature}°F </h4>
          <div className="status"> 
            {(status==="idle")?<h5 className="idle">Status: <span style={{color:"#575252"}}> Idle</span></h5> : 
            <h5 className="waiting">Status: {status}<span>.</span><span>.</span><span>.</span>
            </h5>}
          </div>

          {showChart&&<LineChart 
              type={type}
              width={600} 
              height={400}
              data = {temperatureData}
              range={[65,90]}
          />}
      </div>
    )
  }
}

const mapStateToProps=state=>{

  return{
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

export default connect(mapStateToProps, {
  changeBathroomTemp, 
  changeLivingroomTemp,
  changeKitchenTemp,
  changeBedroomTemp,
})(Room);
