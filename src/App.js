import React, { Component } from 'react';
import './App.css';
import Navbar from './components/Layout/Navbar';
import Footer from './components/Layout/Footer';
import {Route, BrowserRouter} from 'react-router-dom';
import Home from './components/Home/Home';
import Rooms from './components/Rooms/Rooms';
import Summary from './components/Summary/Summary';
import Settings from './components/Settings/Settings';
import { Provider } from 'react-redux';
import store from './components/store/store';

class App extends Component{

  render(){
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Navbar />
            <Route path='/' exact component={Home} />
            <Route path='/summary' exact component={Summary} />
            <Route path='/rooms' exact component={Rooms} />
            <Route path='/settings' exact component={Settings}/>
            <Footer/>
          </div>
        </BrowserRouter>
      </Provider>
  
    );
  }
}

export default App;
