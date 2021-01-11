import logo from './google-logo.svg';
import './App.css';
import React from "react";
import ReactDOM from "react-dom";
import SimpleAccordion from "./Accordion/Accordion"
import ImageAvatars from "./Avatar/Avatar"
import { Box } from '@material-ui/core';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AppsIcon from '@material-ui/icons/Apps';


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
      <Box id="search-header">
      <img alt="google logo" src={logo}/>

      <input
        type="text"
        placeholder="Search"
        value={searchTerm}
        onChange={handleChange}
      />
      <AppsIcon/>
      <NotificationsIcon/>
      <ImageAvatars/>
      </Box>
      <Box id="search-results">
      <ul>
        {results.map(item => (
          <li>{item}</li>
        ))}
              <SimpleAccordion/>
      </ul>

      </Box>
      
    </div>
  );
}


export default App;
