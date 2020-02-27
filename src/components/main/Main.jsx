import React from 'react';
import './main.scss';
import Article from "../article/Article";

function Main() {
    return (

        <main>
          <div className="row">

            <div className="col">
                <Article
                name="pirmasVardas"
                text="pirmasTekstas"
                />
            </div>
              <div className="col">
                  <Article
                      name="antrasVardas"
                      text="antrasTekstas"
                  />
              </div>
            <div className="col">
                <Article
                    name="treciasVardas"
                    text="treciasTekstas"
                />
            </div>

        </div>
            <div className="row">
                <div className="col">
                    <Article
                        name="ketvirtasVardas"
                        text="ketvirtasTekstas"
                    />
                </div>
                <div className="col">
                    <Article
                        name="penktasVardas"
                        text="penktasTekstas"
                    />
                </div>
                <div className="col">
                    <Article
                        name="sestasVardas"
                        text="sestasTekstas"
                    />
                </div>



            </div>
        </main>
    );
}

export default Main;