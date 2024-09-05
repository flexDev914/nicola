import React, { useRef, useState } from 'react';
import logoImg from "../../../assets/Logo.png";
import circleImg from "../../../assets/icon/circle-play.png";
import replayImg from '../../../assets/icon/replayImg.png'
import WelcomeLinkBtn from "../../../components/Button/WelcomeLinkBtn";
import Transition from "../../../components/Transition/Transition";
import welcomeVideo from '../../../assets/welcomevideo.mp4'
import "./welcome.css";

const welcomeLinkBtn = ["VC", "Telegram", "Habr"];

const Welcome = () => {
  const videoRef = useRef(null); 
  const [isPlaying, setIsPlaying] = useState(false);

  const handlePlay = () => {
    console.log('play')
    setIsPlaying(true);
    if (videoRef.current) {
        videoRef.current.play(); 
        setIsPlaying(true); 
    }
  };

  const handlePause = () => {
    console.log('stop')
    setIsPlaying(false); 
    if (videoRef.current) {
        videoRef.current.pause();
    }
  };

  const handleVideoEnd = () =>{
    setIsPlaying(false)
  }

  return (
    <div id="welcome" className="welcomeContainer">
      <div className="welcomeWrapper">
        <div className="welcomeLeft">
          <div className="welcomeImgWrap">
            <img 
              src={isPlaying ? replayImg : circleImg}
              onClick={isPlaying ? handlePause : handlePlay} 
              className="circleImg"
              style={{zIndex: '100'}}
              alt="Play Button"
            />
            {
              isPlaying ? 
                <video ref={videoRef}  className="logoImg" autoPlay onEnded={handleVideoEnd}>
                  <source src={welcomeVideo} type="video/mp4" />
                  Your browser does not support the video tag.
                </video> : <img src={logoImg} alt="logoImg" className="logoImg" />
            }
          </div>
          <div className="welcomeLinkWrap">
            {welcomeLinkBtn.map((title, index) => (
              <WelcomeLinkBtn key={index} index={index} title={title} />
            ))}
          </div>
        </div>
        <div className="welcomeRight">
          <div className="welcomeTitle">
            Lorem Ipsum Dolo <span>res amen lorem</span>
          </div>
          <div className="welcomeText">
            Alcohol based exposures through inadvertently consuming hand
            sanitizer, have been observed to produc
          </div>
          <button className="welcomeMotalBtn" >
            Lorem ipsum
          </button>
          
        </div>
      </div>
      <Transition />
    </div>
  );
};

export default Welcome;
