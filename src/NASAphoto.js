import React from 'react';
import "./Nasaphoto.css";


function NASAphoto({ imageData }) {
    console.log(imageData)

    return (
        <div className="Photo">
            <h1>{imageData.title}</h1>
            <h2>{imageData.date}</h2>
            <img src={imageData.url} alt={imageData.title} />
            <p>{imageData.explanation}</p>
        </div>
    )
}

export default NASAphoto;
