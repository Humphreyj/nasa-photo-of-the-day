import React from 'react';
import ReactPlayer from 'react-player';

import './Media.css';



const Media = (props) => {
    return (
        <div className="media">
            {
            props.media_type === 'video' ? <ReactPlayer className='player' url={props.url} playing width='100%' height='20em' />  : <img className='space-image' src={props.url} alt={props.title}/>
            }
        </div>
    )
}

export default Media;
