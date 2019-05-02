import React, {Component} from 'react';
import { connect } from "react-redux";
import {setEnergyThreshold} from '../store/actions/energySettingAction';
import './utility.css';

class EnergyForm extends Component{
    constructor(props){
        super();
        this.state={
            error:""
        }
    }
    handleSumbmit=(e)=>{
        e.preventDefault();
        if(!Number.isNaN(parseInt(e.target[0].value))&&parseInt(e.target[0].value)>=1&&parseInt(e.target[0].value)<=10){
            this.props.setEnergyThreshold(e.target[0].value)
            this.props.succeeded();
            if(document.getElementsByClassName("success").length!==0){
                document.getElementsByClassName("success")[0].style.display="block";
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
                error:"Invalid input. Please enter a number"
            })
        }else if(parseInt(e.target[0].value)<1||parseInt(e.target[0].value)>10){
            this.props.failed();
            if(document.getElementsByClassName("alert").length!==0){
                document.getElementsByClassName("alert")[0].style.display="block";
            }
            this.setState({
                error:"Please enter a number between 1-10"
            })
        }
    }

    render(){
    return(
        <form 
            className='energy-usage-form' 
            onSubmit = {this.handleSumbmit}
        >
            <h4>Current Energy Alert Threshold:{this.props.energyUsageThreshold} </h4>
            <label htmlFor="energy-usuage">Set alert threshold (Please enter a value between 1-10):</label>
            <br/>
            <input 
                type="text" 
                id="energy-usuage" 
                name="energy-usuage" 
                placeholder="Enter New Threshold"
                min="1"
                max="10"
                required
            />

            <input 
                type="submit" 
                id="submit"
                value="Submit"
            />
            <br/>
            <span style={{color:"red"}}>{this.state.error}</span>
        </form>
    )
}
}

const mapStateToProps=state=>{
    return{
        energyUsageThreshold: state.energyusage.energyUsageThreshold
    }
};

export default connect(mapStateToProps, {setEnergyThreshold})(EnergyForm);