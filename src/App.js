import logo from './google-logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
//import { Box } from '@material-ui/core';

const people = [
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
    ? people
    : people.filter(person =>
        person.toLowerCase().includes(searchTerm.toLocaleLowerCase())
      );

  return (
    <div className="App">
      <logo/>
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
    </div>
  );
}


export default App;
