import React, { Component } from 'react';
// import LineChart from '../LineChart/LineChart';
// import SetTemperature from '../Utility/SetTemperature';
import Room from './Room';
import './rooms.css';

export default class Rooms extends Component {
  constructor(props){
    super();
  }
  render() {
    return (
      <div>

        <div id='rooms'>
          <div className="note">
            <p><strong>Note: </strong>For demonstration purposes, changing temperature compeletes in 10s for the best visual effect.</p>
            <span className="closebtn" onClick={()=>{
                            document.getElementsByClassName("note")[0].style.display="none";
                        }
                    }>&times;</span>
          </div>
          <Room roomName={"Kitchen"} type="temperature" showChart={true}/>
          <Room roomName={"Bedroom"} type="temperature" showChart={true}/>
          <Room roomName={"Livingroom"} type="temperature" showChart={true}/>
          <Room roomName={"Bathroom"} type="temperature" showChart={true}/>
        </div>
      </div>
    )
  }
}
