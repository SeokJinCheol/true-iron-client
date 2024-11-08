import React from 'react';
import './App.css';
import Home from "./pages/Home";

import { Provider } from 'react-redux';
import rootReducer from "./modules";

import {BrowserRouter as Router} from "react-router-dom";
import {createStore} from "redux";

const store = createStore(rootReducer);

function App() {
  return (
      <Provider store={store}>
          <Router>
              <Home></Home>
          </Router>
      </Provider>
  );
}

export default App;
