import React, { Component } from 'react';
import EnergyForm from '../Utility/EnergyForm';
import TemperatureForm from '../Utility/TemperatureForm';
import './settings.css';
import {SettingsAlert} from '../Utility/Alert';

class Settings extends Component {
  constructor(props){
    super();
    this.state={
      success:false,
      showAlert:false
    }
  }

  succeeded=()=>{
    this.setState({
      success:true,
      showAlert:true
    })
  }

  failed=()=>{
    this.setState({
      success:false,
      showAlert:true
    })
  }

  render() {
    const {success, showAlert} = this.state;
    return (
      <div>
        <SettingsAlert success={success} showAlert={showAlert}/>
        <div className='forms'>
            
            <h2>Energy Usuage Alert Setting</h2>

            <div id="energy-form"><EnergyForm succeeded={this.succeeded} failed={this.failed}/></div>


            <h2>Temprature Setting</h2>
            <div id="temperature-form">
              <TemperatureForm roomName="kitchen" succeeded={this.succeeded} failed={this.failed}/>
              <TemperatureForm roomName="bedroom" succeeded={this.succeeded} failed={this.failed}/>
              <TemperatureForm roomName="livingroom" succeeded={this.succeeded} failed={this.failed}/>
              <TemperatureForm roomName="bathroom" succeeded={this.succeeded} failed={this.failed}/>
            </div>

        </div>
      </div>
    )
  }
}

export default Settings;

