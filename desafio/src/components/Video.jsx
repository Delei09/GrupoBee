
import React from 'react';
import './Video.css'

const  video = () => {
  return (
    <iframe src="https://www.youtube.com/embed/aJT9F2oHrSg" 
    title="YouTube video player" 
    frameborder="0" 
    allow="accelerometer; autoplay; clipboard-write;
     encrypted-media; gyroscope; picture-in-picture" 
     allowfullscreen></iframe>
  );
};

export default video