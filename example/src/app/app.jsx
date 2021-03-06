import React from 'react';
import {
    BrowserRouter,
    Route,
    Switch
} from 'react-router-dom';

// examples code
import Introduction from '../examplesCode/introduction/intro';
import GetStarted from '../examplesCode/getStarted/index';
import MakingStructure from '../examplesCode/makingStructure/index';
import SubComponents from '../examplesCode/componentsUse/index';
import CustomOnChange from '../examplesCode/customOnChange/index';
import Styles from '../examplesCode/stylesUse';
import TestInside from '../examplesCode/testInside';

import { url } from '../url';
// app menu
import Menu from '../components/Menu/menu';
// style
import '../globalStyles/bulma.css';
import './app.css';

 
function App(){
    return(
        <div id="app-container">
            <BrowserRouter basename={url}>

                <Menu />

                <div id="app-content-wrapper">
                    <Switch>
                        <Route exact path="/" component={Introduction}  />
                        <Route exact path="/get-started" component={GetStarted}  />
                        <Route exact path="/structure" component={MakingStructure} />
                        <Route exact path="/including-sub-components" component={SubComponents} />   
                        <Route exact path="/styles" component={Styles}  />
                        <Route exact path="/custom-onchange" component={CustomOnChange}  />
                        {/* <Route exact path="/test" component={TestInside}  /> */}
                    </Switch>
                </div>

            </BrowserRouter>
        </div>
    )
}

export default App;