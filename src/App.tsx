import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import rootReducer from "./modules";

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {createStore} from "redux";

import Header from "./components/organisms/Header";
import Footer from "src/components/organisms/Footer";
import Home from "src/components/pages/Home";

const store = createStore(rootReducer);

function App() {
  return (
      <Provider store={store}>
          <Header />
          <div className="body">
              <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/test" element={<div>pushTest</div>} />
              </Routes>
          </div>
          <Footer />
      </Provider>
  );
}

export default App;
