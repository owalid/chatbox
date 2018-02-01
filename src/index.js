//React
import React from 'react';
import {render} from 'react-dom';

//Component
import Connexion from './component/Connexion';
import App from './component/App';
import Notfound from './component/NotFound';

//Routeur
import {BrowserRouter, Match, Miss} from 'react-router';

//Style
import './index.css';

const Root = () =>{
    return(
        <BrowserRouter>
            <div>
                <Match exactly pattern="/" component={Connexion}/>
                <Match exactly pattern="/pseudo/:pseudo" component={App}/>
                <Miss component={Notfound}/>
            </div>
        </BrowserRouter>
    )

};
render(
    <Root/>,
    document.getElementById('root')
);