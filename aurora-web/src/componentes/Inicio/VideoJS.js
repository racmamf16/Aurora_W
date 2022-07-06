import React from 'react';
import ReactPlayer from 'react-player';
import video from '../../images/GRAP.mp4';

const VideoJS = () =>{
    return(
        <ReactPlayer 
        url ={video}
        playing 
        loop
        volume='0'
        width = '100%'
        height='100%'/>
    )
}
export default VideoJS;