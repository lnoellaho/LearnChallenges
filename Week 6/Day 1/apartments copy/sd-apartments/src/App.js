import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import ApartmentsIndex from './components/ApartmentsIndex'
import Header from './components/Header'
import apartments from './store/apartments'
import ApartmentDetail from './components/ApartmentDetail'
import './App.css';

class App extends Component {
  render() {
    return (
    <Router>
        <div>
            <Header />
            <Route exact path ='/' component={ApartmentsIndex} />
            <Route path='/apartments/:id' component={ApartmentDetail} />
        </div>
    </Router>
    );
  }
}

export default App;
