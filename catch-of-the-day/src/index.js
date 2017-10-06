
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import './css/style.css';

import StorePicker from './components/StorePicker';
import App from './components/App';
import NotFound from './components/NotFound';
import Nav from './components/Nav';

const Root = () => {
  return  (
    <BrowserRouter>
      <div>
        <Nav></Nav>
        <Switch>
          <Route path='/' exact component={StorePicker}/>
          <Route path='/popular' component={App}/>
          <Route component={NotFound}/>
        </Switch>
      </div>
    </BrowserRouter>
  )
}

ReactDOM.render(<Root/>,document.getElementById('main'))
