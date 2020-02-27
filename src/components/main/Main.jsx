import React, {Component} from 'react';

import './main.scss';
import Article from "../article/Article";
import postai from "../../data/postai";
import Location from "../location/Location";

//react.component jei virsuje neimpoirtuoju

class Main extends Component{
    constructor() {
        super()
        this.state = {
            places: [] //tuscias state vietovems
        }
    }

    componentDidMount() {
        //gaunami duomenys iš API
        fetch("https://api.meteo.lt/v1/places")
            .then(response => response.json())
            .then(
                data=>{
                    this.setState({
                        places: data
                    })
                    console.log(this.state.places);
                }
            )
    }

    render(){
        const postData = postai.map(post=> <Article data={{
            key:post.id,
            title:post.pavadinimas,
            text:post.tekstas
        }} />)
        const postLocation = this.state.places.map(places=> <Location places={places.name}/>)
        return(
            <main>
                <div className="row">
                    {postData}
                    {postLocation}
                </div>

            </main>
        );
    }

}




export default Main;