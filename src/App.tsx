import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import rootReducer from "./modules";

import {Route, Routes} from "react-router-dom";
import {createStore} from "redux";

import { SidebarProvider, SidebarTrigger } from "./shadcn/components/ui/sidebar"
import { AppSidebar } from "./shadcn/components/app-sidebar"

import Header from "./components/organisms/Header";
import Footer from "src/components/organisms/Footer";
import Home from "src/components/pages/Home";

const store = createStore(rootReducer);

function App() {
  return (
      <Provider store={store}>
          <SidebarProvider>
              <AppSidebar />
              <main>
                  <SidebarTrigger />
                  <Routes>
                      <Route path="/" element={<Home />} />
                      <Route path="/test" element={<div>pushTest</div>} />
                  </Routes>
              </main>
          </SidebarProvider>
      </Provider>
  );
}

export default App;
