import React from 'react';
import Media from '../Media/Media';
import'./Content.css';
const Content = (props) => {
    return (
        <div className='content'>
            
                <h3 className='date' >{props.date}</h3>
            
            {/* date info */}
            <div className="media-container">
                <h3 className="title">{props.title}</h3>
                
                <Media
                title={props.title}
                 media_type={props.media_type}
                 url={props.url} />

                <p className="explanation">{props.explanation}</p>
            </div>
        </div>
    );
}

export default Content;
