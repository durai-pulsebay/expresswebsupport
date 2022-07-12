import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import loadable from '@loadable/component';
const HomePage = loadable(() => import('../src/pages/home/home'));
const ConatctPage = loadable(() => import('../src/pages/contact/contact'));
const WhatCanWeFixPage = loadable(() => import('../src/pages/what-can-we-fix/what-can-we-fix'));
const Footer = loadable(() => import('../src/components/footer/footer'));
const URL = "https://ipapi.co/json";

export default function App() {
  // const [info, setInfo] = useState({ ip: "" });
  const [countryCode, setCountryCode] = useState(null);
  const [countryName, setCountryName] = useState(null);
  const [currency, setCurrency] = useState(null);
  window.countryName = countryName;

  useEffect(() => {
    fetch(URL, { method: "get" })
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data && data.country_code);
        setCountryName(data && data.country_name);
        setCurrency(data && data.currency);
      });
  }, []);

  // console.log("countryName", countryName);
  return (
    <>
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomePage />
          </Route>
          <Route path="/what-can-we-fix">
            <WhatCanWeFixPage />
          </Route>
          <Route path="/contact">
            <ConatctPage />
          </Route>
          <Route path="/:country" exact>
            <HomePage />
          </Route>
          <Route path="/:country/what-can-we-fix" >
            <WhatCanWeFixPage />
          </Route>
          <Route path="/:country/contact">
            <ConatctPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}