import React from 'react';
import theme from './theme';
import styled from "styled-components"

const ParaGraph = styled.div`
    color: red;
    width: 50%;
    margin: 0 auto;
    border: 5px solid White;
    `



function NASAphoto({ imageData }) {
    console.log(imageData)

    return (
        <ParaGraph>
            <div className="Photo">
                <h1>{imageData.title}</h1>
                <h2>{imageData.date}</h2>
                <img width={450} src={imageData.url} alt={imageData.title} />
                <p>{imageData.explanation}</p>
            </div>
        </ParaGraph>
    )
}

export default NASAphoto;
