import React, { useState } from 'react';
import './SlideBar.css';
import github from '../assetes/github.png';
import ig from '../assetes/ig1.jpg';
import twitter from '../assetes/twitter.jpg';
import linkedin from '../assetes/linkedIn.png';
import shareIcon from '../assetes/share.png'; // Ensure this path is correct

const SlideBar = () => {
  const [showCards, setShowCards] = useState(false);

  const handleShareButtonClick = () => {
    setShowCards(!showCards);
  };

  return (
    <div className="slide-bar">
      <img src={shareIcon} alt="Share" className="share-btn" onClick={handleShareButtonClick} />
      {showCards && (
        <div className="card-container">
          <div className="card card1">
            <a href="https://github.com/abikoy">
              <img src={github} alt="GitHub" className="github" />
            </a>
          </div>
          <div className="card card2">
            <a href="https://x.com/abkoy19">
              <img src={twitter} alt="Twitter" className="twitter" />
            </a>
          </div>
          <div className="card card3">
            <a href="https://www.instagram.com/abkoy19/">
              <img src={ig} alt="Instagram" className="instagram" />
            </a>
          </div>
          <div className="card card4">
            <a href="https://www.linkedin.com/in/haile-kinfu-32b1422a0/">
              <img src={linkedin} alt="LinkedIn" className="linkedin" />
            </a>
          </div>
        </div>
      )}
    </div>
  );
};

export default SlideBar;
