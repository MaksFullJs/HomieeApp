import React, { useState, useEffect } from 'react';
import './App.css';
import Footer from './containers/Footer/Footer';
import Header from './containers/Header/Header';
import { Provider } from "react-redux";
import store from './containers/redux/store';


function App() {
  return (
    <Provider store={store}>
      <Header />
      <Footer />
    </Provider>
  );
}

export default App;
