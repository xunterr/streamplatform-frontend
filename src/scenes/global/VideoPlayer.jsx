import React, { Component, useEffect, useState } from 'react';
import { useRef } from 'react';
import videojs from 'video.js';
import "videojs-hotkeys";
import 'video.js/dist/video-js.css';
import '../../styles/player.scss'

const Player = ({className, url}) => {
    const playerRef = useRef(null)
    const videoRef = useRef(null)
    const [showTooltip, setShowTooltip] = useState(true)
    const [error, setError] = useState(null)
    
    const options = {
        controls: true,
        responsive: true,
        liveui: true,
        trackingThreshold: 2,
        plugins: {
            hotkeys: {
              volumeStep: 0.1,
              seekStep: 5,
              enableModifiersForNumbers: false
            },
        },
        sources: [
        {
          type: "application/vnd.apple.mpegurl",
          src: url
        }]
    }
    useEffect(() => {
        if(!playerRef.current){
            const videoElement = videoRef.current;
            if(!videoElement) return;

            const player = playerRef.current = videojs(videoElement, options);
        }
    }, [options, playerRef, videoRef])

    return (
        <div data-vjs-player className={`${className} flex`}>
            <video ref={videoRef} className={` group video-js vjs-live vjs-liveui vjs-big-play-centered vjs-16-9 z-0`}/>
        </div>
    );
}
export default Player;