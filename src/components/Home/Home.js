import React, { Component } from 'react';
import './home.css';

export default class Home extends Component {
  render() {
    return (
      <div id='home'>
          <h3 id="welcome">
            Welcome to <a href='https://hibersense.com/' style={{textDecoration:'none'}}>HiberSense</a> Dashboard. Here you can keep your room temperature and energy cost under control.
            <br/>
          </h3>

          <a className='button green'  href='/summary'>Get started</a>

          <div className="card">
            <div className="container">
              <h4><b>Note</b></h4> 
              <p>This project is for demonstration purposes only, all data are auto generated to simulated real life data visualization. The time it takes to complete updating temperature is set to 10s for convenience. </p> 

              <p>Check the <a href="https://github.com/ambitiousbird/hibersense-dash" id="source">source code</a> for more information</p>
            </div>
          </div>
      </div>
    )
  }
}
