import React, { Component } from 'react'
import { connect } from "react-redux";
import {setBedroomTemp, setBathroomTemp,setKitchenTemp,setLivingroomTemp} from '../store/actions/temperatureSettingAction';
import './utility.css';

// import { useAlert,Provider as AlertProvider } from 'react-alert';


class TemperatureForm extends Component {

    constructor(props){
        super();
        this.state={
            error:"",
        }
    }

    // alert = useAlert()
    handleSubmit=(e)=>{
        e.preventDefault();
        if(!Number.isNaN(parseInt(e.target[0].value))&&parseInt(e.target[0].value)>=60&&parseInt(e.target[0].value)<=90){
            switch(this.props.roomName){
                case "kitchen":{
                    this.props.setKitchenTemp(e.target[0].value);
                    this.props.succeeded();
                    if(document.getElementsByClassName("success").length!==0){
                        document.getElementsByClassName("success")[0].style.display="block";
                    }

                    break;
                }
                case "livingroom":{
                    this.props.setLivingroomTemp(e.target[0].value);
                    this.props.succeeded();
                    if(document.getElementsByClassName("success").length!==0){
                        document.getElementsByClassName("success")[0].style.display="block";
                    }
                    break;
                }
                case "bedroom":{
                    this.props.setBedroomTemp(e.target[0].value);
                    this.props.succeeded();
                    if(document.getElementsByClassName("success").length!==0){
                        document.getElementsByClassName("success")[0].style.display="block";
                    }
                    break;
                }
                case "bathroom":{
                    this.props.setBathroomTemp(e.target[0].value);
                    this.props.succeeded();
                    if(document.getElementsByClassName("success").length!==0){
                        document.getElementsByClassName("success")[0].style.display="block";
                    }
                    break;
                }
                default:{
                    break;
                }
            }
            this.setState({
                error:""
            })
        }else if(Number.isNaN(parseInt(e.target[0].value))){
            this.props.failed();
            if(document.getElementsByClassName("alert").length!==0){
                document.getElementsByClassName("alert")[0].style.display="block";
            }
            this.setState({
                error:"Invalid input. Please enter a number",
            })
        }else if(parseInt(e.target[0].value)<60||parseInt(e.target[0].value)>90){
            this.props.failed();
            if(document.getElementsByClassName("alert").length!==0){
                document.getElementsByClassName("alert")[0].style.display="block";
            }
            this.setState({
                error:"Please enter a number between 60-90",
            })
        }
    }

    
  render() {
    const {
        roomName,
        bathroomTemperature,
        livingroomTemperature,
        bedroomTemperature,
        kitchenTemperature,} = this.props;


        var temp =(function(){
            if(roomName==="kitchen") return kitchenTemperature;
            if(roomName==="livingroom") return livingroomTemperature;
            if(roomName==="bedroom") return bedroomTemperature;
            if(roomName==="bathroom")return bathroomTemperature;
        })();
    
        temp = typeof temp === "number"? temp: temp.temperature;
    
        return(
            <form className='temperature-form' onSubmit={this.handleSubmit}>
                <img className="room-image" src={require("../../assets/images/"+roomName+".png")} alt={roomName}/>
                <div>
                    <h4 style={{textTransform:"capitalize"}}>{roomName} </h4>
                    <h5>Temperature set as: {temp}°F </h5>
                    <label htmlFor="temperature">Update setting: </label>
                    <input type="text" id="temperature" name="temperature" placeholder="Enter New Temperature.." required/>
                    <input type="submit" id="submit" value="Submit"/>
                    <br/>
                    <span style={{color:"red"}}>{this.state.error}</span>
                </div>

            </form>

        )
  }
}


const mapStateToProps=state=>{
    return{
        kitchenTemperature: state.temperature.kitchenTemperature,
        livingroomTemperature: state.temperature.livingroomTemperature,
        bedroomTemperature: state.temperature.bedroomTemperature,
        bathroomTemperature: state.temperature.bathroomTemperature

    }
};

export default connect( mapStateToProps,{setBedroomTemp, setBathroomTemp,setKitchenTemp,setLivingroomTemp})(TemperatureForm);