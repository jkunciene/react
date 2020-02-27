import React from "react"
import './article.scss';

function Article(props) {
    return (
        <div className="col">
        <div className="contact-card">
            <img src="http://placekitten.com/300/200"/>
            <h3>{props.data.name}</h3>
            <p>{props.data.text}</p>
            <a href="#">Daigiau...</a>
        </div>
        </div>
    )
}

export default Article;