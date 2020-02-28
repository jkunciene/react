import React from 'react';
import Header from "../header/Header";
import Main from "../main/Main";
import Footer from "../footer/Footer";
import About from "../about/About";

import './app.scss';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

//npm install react-router-dom


function App() {
    return (
        <div className="container">
            <Header />
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/main">Pagrindinis</Link>
                            </li>
                            <li>
                                <Link to="/about">Apie</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/main">
                            <Main/>
                        </Route>
                        <Route path="/about">
                            <About/>
                        </Route>
                    </Switch>
                </div>
        </Router>
            <Footer />

        </div>
    );
}

export default App;
