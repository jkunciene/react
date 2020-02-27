import React, {Component} from 'react';

import './main.scss';
import Article from "../article/Article";
import postai from "../../data/postai"

//react.component jei virsuje neimpoirtuoju

class Main extends Component{
    render(){
        const postData = postai.map(post=> <Article data={{
            key:post.id,
            title:post.pavadinimas,
            text:post.tekstas
        }} />)
        return(
            <main>
                <div className="row">
                    {postData}
                </div>

            </main>
        );
    }

}




export default Main;