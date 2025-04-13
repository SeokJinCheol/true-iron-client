// import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './global.css'
import App from './App.tsx'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import LoginPage from "@/pages/Login.tsx";

import { Provider } from 'react-redux';
import {ThemeProvider} from "@/components/theme-provider";
import {createStore} from "redux";
import rootReducer from "./modules";
const store = createStore(rootReducer);

createRoot(document.getElementById('root')!).render(
  <>
      <Provider store={store}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
             <BrowserRouter>
                 <Routes>
                     <Route path="/login" element={<LoginPage />} />
                     <Route path="/*" element={<App />} />
                 </Routes>
            </BrowserRouter>
          </ThemeProvider>
      </Provider>
  </>
)
