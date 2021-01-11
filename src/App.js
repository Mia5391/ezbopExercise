import logo from './google-logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import SimpleAccordion from "./Accordion/Accordion"
//import { Box } from '@material-ui/core';

const websites = [
  "Siri",
  "Alexa",
  "Google",
  "Facebook",
  "Twitter",
  "Linkedin",
  "Sinkedin"
];

function App() {
  const [searchTerm, setSearchTerm] = React.useState("");
  const handleChange = event => {
    setSearchTerm(event.target.value);
  };

  const results = !searchTerm
    ? websites
    : websites.filter(website =>
        website.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div className="App">
      <img alt="google logo" src={logo}/>
      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <ul>
        {results.map(item => (
          <li>{item}</li>
        ))}
      </ul>
      <SimpleAccordion/>

    </div>
  );
}


export default App;
