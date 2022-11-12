import React, {useState} from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {Paths} from "./paths";
import ChildPage from "./ChildPage";
import ParentPage from './ParentPage';
import './App.css';
import HomePage from './HomePage';

export default function App() {

  return (
      <BrowserRouter>
        <Routes>
          <Route
              path={Paths.HOME}
              element={
                  <HomePage/>
              }
          />
          <Route
              path={Paths.CHILD}
              element={
                  <ChildPage/>
              }
          />
          <Route
              path={Paths.PARENT}
              element={
                  <ParentPage/>
              }
          />
        </Routes>
          </BrowserRouter>
  );
}