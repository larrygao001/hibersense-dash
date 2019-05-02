
import React, { Component } from 'react';
import * as d3 from 'd3';
import {Donut3D_transition, Donut3D_draw} from './Donut3D';
import './donutchart.css';

const energyData=[
	{label:"Kitchen", color:"#3366CC",usuage:0},
	{label:"Bathroom", color:"#990099",usuage:0},
	{label:"Bedroom", color:"#FF9900",usuage:0},
	{label:"Livingroom", color:"#109618",usuage:0},
];

const randomData=()=>{
    
    return energyData.map(function(d){ 
        return {label:d.label, 
            value:1000*d3.randomNormal(d.usuage,0.005)(), 
            color:d.color};});
}

export default class componentName extends Component {
    constructor(props){
        super();
    }
 
    fillData=()=>{
        const {
            kitchenUsuage,
            bathroomUsuage,
            bedroomUsuage,
            livingroomUsuage
        } = this.props;
        const total = kitchenUsuage+bathroomUsuage+bedroomUsuage+livingroomUsuage;
        const kitchenPercentage = kitchenUsuage/total;
        const bathroomPercentage = bathroomUsuage/total;
        const bedroomPercentage = bedroomUsuage/total;
        const livingroomPercentage = livingroomUsuage/total;

        energyData.forEach(i=>{
            if(i.label==="Kitchen") i.usuage = kitchenPercentage;
            if(i.label==="Bathroom") i.usuage = bathroomPercentage;
            if(i.label==="Bedroom") i.usuage = bedroomPercentage;
            if(i.label==="Livingroom") i.usuage = livingroomPercentage;
        });
    }

    componentWillMount(){
        this.fillData();
    }
    
    componentDidMount() {

        var svg = d3.select("#pieChart").append("svg").attr("width",400).attr("height",300);
    
        svg.append("g").attr("id","energyDonut");
        Donut3D_draw("energyDonut", randomData(), 150, 150, 130, 100, 30, 0.4);

    };

    componentWillUpdate(){
        this.fillData();
        this.transition = setInterval(
            ()=>{
            Donut3D_transition("energyDonut", randomData(), 130, 100, 30, 0)},
            1000
        )
    }

    componentWillUnmount(){
        clearInterval(this.transition);
    }

    render() {
      return (
        <div className='energy-consumption'>
            <h3 style={{paddingRight:"200px",textAlign:"center"}}>Energy usage distribution</h3>
            <div id='pieChart'></div>
        </div>
      )
    }
  }
