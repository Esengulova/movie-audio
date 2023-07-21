import React, { useRef } from 'react';
import ShakiraSong from '../../audio/Shakira_-_Waka_Waka_This_Time_for_Africa__Naijamusics.com.mp3';

const UseRefPlayer = () => {
  const videoRef = useRef();

  const handlePlay = () => {
    videoRef.current.play();
  };
  const handlePause = () => {
    videoRef.current.pause();
  }

  return (
    <>
      <div className="grid-btn">
        <button className="btn" onClick={handlePlay}>
          
          Play
        </button>
        <button className="btn-pause" onClick={handlePause}>
          
          Pause
        </button>
      </div>
      <audio src={ShakiraSong} controls ref={videoRef}>
        {/* <source src='' /> */}
      </audio>
    </>
  );
};

export default UseRefPlayer;
