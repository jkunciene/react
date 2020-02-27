import React from "react"
import './article.scss';

function Article(props) {
    return (
        <div className="contact-card">
            <img src="http://placekitten.com/300/200"/>
            <h3>{props.name}</h3>
            <p>{props.text}</p>
            <a href="#">Daigiau...</a>
        </div>
    )
}

export default Article