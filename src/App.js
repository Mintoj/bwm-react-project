import React, { Component } from 'react';
import { BrowserRouter, Route, Redirect } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

import 'App.css';

import { Header } from 'shared/Header';

// State Enabled
import RentalListing  from 'components/rental/rental-listing/RentalListing';
import RentalDetail  from 'components/rental/rental-detail/RentalDetail';

// Store for state management
const store = require('./reducers').init();

class App extends Component {

  render() {
    return (
      <Provider store={store}>
      <BrowserRouter>
      <div className='App'>      
        <Header />
        <div className='container'>
          <Route exact path='/' render={() => <Redirect to='rentals' />} />    
          <Route exact path='/rentals' component={RentalListing}/>
          <Route exact path='/rentals/:id' component={RentalDetail}/>               
        </div>
      </div>
      </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
