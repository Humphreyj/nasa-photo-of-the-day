import React from 'react';
import Media from '../Media/Media';
import styled from 'styled-components';
import'./Content.css';

const Description = styled.p`
line-height: 2em;
font-size: 1.3em;
padding: 0% 1%;
height: 10em;
width: 80%;
margin: 0 auto;
overflow-y: scroll;
box-sizing: content-box;
color: white;
&::-webkit-scrollbar {
    display: none;
    }
    @media(min-width: 700px) {
        & {
            width: 80%;
            font-size: 2em;
            margin-right: 14%;
        }
    }

`
const Content = (props) => {
    return (
        <div className='content'>
            
                <h3 className='date' >POTD for {props.date}</h3>
            
            {/* date info */}
            <h3 className="title">{props.title}</h3>
            <div className="media-container">
                
                
                <Media
                title={props.title}
                 media_type={props.media_type}
                 url={props.url} />

                <Description>
                {props.explanation}
                </Description>
            </div>
        </div>
    );
}

export default Content;
