import React from 'react';

import './Result.css';

export default function Result(props) {
    return(
    <div className="card result">
        <a href={`/details/${props.document.id}`}>
            <img className="card-img-top" src={props.document.id} alt={props.document.keyPhrases}></img>
            <div className="card-body">
                <h6 className="title-style">{props.document.content}</h6>
            </div>
        </a>
    </div>
    );
}
