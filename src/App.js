// const { useEffect } = require("react");

import React, { useState, useEffect } from "react";
import "./App.css";
import Nasaphoto from "./NASAphoto";
import axios from 'axios';
import styled from "styled-components";
import theme from './theme';

const StyledApp = styled.div`
  background-color: ${theme.primaryColor};
  padding: 2%;
`

const base_url = 'https://api.nasa.gov/planetary/apod?api_key=';
const api_key = 'epSI8AEc3AdgZFCRrpHSkDtEsZgGH7tJ9DnSgb4R'


function App() {
  const [imageData, setImageData] = useState({})

  useEffect(() => {
    const nasaImg = () => {
      axios.get(`${base_url}${api_key}`)
        .then((res) => {
          console.log(res)
          setImageData(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    nasaImg();
  }, [])


  return (
    <StyledApp>
      <div className="App">
        <h1>NASA Photo of the Day</h1>
        <Nasaphoto imageData={imageData} />
      </div>
    </StyledApp>
  );
}

export default App;
