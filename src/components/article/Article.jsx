import React, {Component} from "react"
import './article.scss';

class Article extends Component {
    constructor() {
        super()
        this.state = {
            counter: 0
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(prevState => {
            return {
                counter: prevState.counter + 1
            }
        })
    }


    render() {
        return (

            <div className="col">
                <div className="contact-card">
                    <img src="http://placekitten.com/300/200"/>
                    <h3>{this.props.data.name}</h3>
                    <p>{this.props.data.text}</p>
                    <p>Like: {this.state.counter}</p>
                    <a onClick={this.handleClick} href="#">Like</a>
                </div>
            </div>
        );
    }
}

export default Article;