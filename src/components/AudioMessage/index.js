import React, { useState, useEffect, useRef } from "react";
import waveSVG from "../../assets/img/wave.svg";
import playSVG from "../../assets/img/play.svg";
import pauseSVG from "../../assets/img/pause.svg";
import convertTime from "../../helpers/convertTime";

const AudioMessage = ({ audio }) => {
  const [isPlay, setPlay] = useState(false);
  const [progressBar, setProgressBar] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!isPlay) {
      audioRef.current.play();
    } else {
      audioRef.current.pause();
    }
  };

  useEffect(() => {
    audioRef.current.addEventListener(
      "playing",
      () => {
        setPlay(true);
      },
      false
    );
    audioRef.current.addEventListener(
      "ended",
      () => {
        setPlay(false);
        setProgressBar(0);
      },
      false
    );
    audioRef.current.addEventListener(
      "pause",
      () => {
        setPlay(false);
      },
      false
    );
    audioRef.current.addEventListener("timeupdate", () => {
      const duration = (audioRef.current && audioRef.current.duration) || 0;
      setCurrentTime(audioRef.current.currentTime.toFixed(2));
      setProgressBar((audioRef.current.currentTime / duration) * 100);
    });
  }, []);

  return (
    <div className="message__audio">
      <audio src={audio} preload="auto" ref={audioRef} />
      <div
        className="message__audio-progress"
        style={{ width: progressBar + "%" }}
      ></div>
      <div className="message__audio-info">
        <div className="message__audio-btn">
          <button onClick={togglePlay}>
            {isPlay ? (
              <img src={pauseSVG} alt="pause svg" />
            ) : (
              <img src={playSVG} alt="play svg" />
            )}
          </button>
        </div>
        <div className="message__audio-wave">
          <img src={waveSVG} alt="wave svg" />
        </div>
        <span className="message__audio-duration">
          {convertTime(currentTime)}
        </span>
      </div>
    </div>
  );
};

export default AudioMessage;
