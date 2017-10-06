import React from 'react';
import StorePicker from './StorePicker';
import Header from './Header';
import Order from './Order';
import Inventory from './Inventory';

class App extends  React.Component{
  render(){
    return (
      <div>
        <div className="catch-of-the-day">
          <div className="menu">
            <Header tagline="sup cuz"/>
          </div>
          <Order/>
          <Inventory/>
        </div>
    </div>
    )
  }
}

export default App;
