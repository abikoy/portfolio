// Photo.js
import React from 'react';
import photo from '../assetes/ha.jpeg'; // Import your photo

function Photo({ style }) {

  const circleStyle = {
    // Keep any additional styles passed as props
    borderRadius: '100%', // Set border-radius to 50% to create a circle
    overflow: 'hidden',
    maxWidth: '250px', // Set maximum width
    maxHeight: '250px', // Hide overflowing content
  };

  return (
    <div>
      <img src={photo} alt="haile.jpeg" style={circleStyle} />
    </div>
  );
}

export default Photo;