import React from 'react';
import './App.css';

import { Provider } from 'react-redux';
import rootReducer from "./modules";

import {Route, Routes} from "react-router-dom";
import {createStore} from "redux";

import {SidebarInset, SidebarProvider, SidebarTrigger} from "./shadcn/components/ui/sidebar"
import { AppSidebar } from "./shadcn/components/app-sidebar"

import Header from "./components/organisms/Header";
import Footer from "src/components/organisms/Footer";
import Home from "src/components/pages/Home";
import {ThemeProvider} from "src/shadcn/components/theme-provider";
import {Separator} from "src/shadcn/components/ui/separator";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList, BreadcrumbPage,
    BreadcrumbSeparator
} from "src/shadcn/components/ui/breadcrumb";

const store = createStore(rootReducer);

function App() {
  return (
      <Provider store={store}>
          <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
              <SidebarProvider>
                  <AppSidebar />
                  <SidebarInset>
                      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
                          <SidebarTrigger className="-ml-1" />
                          <Separator orientation="vertical" className="mr-2 h-4" />
                          <Breadcrumb>
                              <BreadcrumbList>
                                  <BreadcrumbItem className="hidden md:block">
                                      <BreadcrumbLink href="#">
                                          Building Your Application
                                      </BreadcrumbLink>
                                  </BreadcrumbItem>
                                  <BreadcrumbSeparator className="hidden md:block" />
                                  <BreadcrumbItem>
                                      <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                                  </BreadcrumbItem>
                              </BreadcrumbList>
                          </Breadcrumb>
                      </header>
                      <div className="flex flex-1 flex-col gap-4 p-4">
                          <div className="min-h-[100vh] flex-1 rounded-xl bg-muted/50 md:min-h-min">
                              <Routes>
                                  <Route path="/" element={<Home />} />
                                  <Route path="/test" element={<div>pushTest</div>} />
                              </Routes>
                          </div>
                      </div>
                  </SidebarInset>
              </SidebarProvider>
          </ThemeProvider>
      </Provider>
  );
}

export default App;
