import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import loadable from '@loadable/component';
const HomePage = loadable(() => import('../src/pages/home/home'));
const ConatctPage = loadable(() => import('../src/pages/contact/contact'));
const HowCanWeHelpPage = loadable(() => import('../src/pages/how-can-we-help/how-can-we-help'));
const PrivacyPolicyPage = loadable(() => import('../src/pages/privacy-policy/privacy-policy'));
const TermsAndConditionsPage = loadable(() => import('../src/pages/terms-and-conditions/terms-and-conditions'));
const Footer = loadable(() => import('../src/components/footer/footer'));
const URL = "https://ipapi.co/json";

export default function App() {
  // const [info, setInfo] = useState({ ip: "" });
  const [countryCode, setCountryCode] = useState(null);
  const [countryName, setCountryName] = useState(null);
  // const [currency, setCurrency] = useState(null);
  window.countryName = countryName;
  window.countryCode = countryCode;

  useEffect(() => {
    fetch(URL, { method: "get" })
      .then((response) => response.json())
      .then((data) => {
        setCountryCode(data && data.country_code.toLowerCase());
        setCountryName(data && data.country_name);
        // setCurrency(data && data.currency);
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
          <Route path="/how-can-we-help">
            <HowCanWeHelpPage />
          </Route>
          <Route path="/contact">
            <ConatctPage />
          </Route>
          <Route path="/privacy-policy">
            <PrivacyPolicyPage />
          </Route>
          <Route path="/terms-and-conditions">
            <TermsAndConditionsPage />
          </Route>
          <Route path="/:country" exact>
            <HomePage />
          </Route>
          <Route path="/:country/how-can-we-help" >
            <HowCanWeHelpPage />
          </Route>
          <Route path="/:country/contact">
            <ConatctPage />
          </Route>
          <Route path="/:country/privacy-policy">
            <PrivacyPolicyPage />
          </Route>
          <Route path="/:country/terms-and-conditions">
            <TermsAndConditionsPage />
          </Route>
        </Switch>
      </Router>
      <Footer />
    </>
  );
}