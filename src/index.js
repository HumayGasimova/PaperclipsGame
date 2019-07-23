/**
 * Libraries
 */

import React from 'react';
import ReactDOM from 'react-dom';

import {
    Provider
} from 'react-redux';
import configureStore,{
    history
} from './store/store';

import {
    Route,
    Switch
} from 'react-router-dom';
import {
    ConnectedRouter
} from 'connected-react-router';
import store from './store/store';

// import { Route, Link, BrowserRouter as Router } from 'react-router-dom'
/**
 * Components
 */

import App from './components/app';
import Welcome from './WelcomePage/welcomePage';

// const store = configureStore()


ReactDOM.render(
    <Provider store={store}>
       <ConnectedRouter history={history}>
            <Switch>
                <Route 
                  // exact 
                  path="/ticTacToe"
                  component={App}/>
               <Route 
                  exact 
                  path="/"
                  component={Welcome}/>
             
               {/* <Redirect from="/" to="/Welcome"/> */}
               
               {/* <Route 
                  // exact 
                  path="/Home"
                  component={AsyncHome}/> */}
               {/* <Route 
                  render={()=>(<h1>404</h1>)}/> */}
               {/* <Route 
                  exact 
                  path="/"
                  render={()=>(<div>Hey</div>)}/> */}

               {/* <Route
                  // exact 
                  path="/Home"
                  render={() => (
                     <Suspense fallback={<div>Loading...</div>}>
                        <Home />
                     </Suspense>
                  )}/> */}
            </Switch>
       </ConnectedRouter>
    </Provider>,
   document.getElementById('app')
);


// const routing = (
//     <Router>
//       <div>
//         <Route exact path="/" component={App} />
//         <Route path="/Welcome" component={Welcome} />
//       </div>
//     </Router>
//   )
//   ReactDOM.render(routing, document.getElementById('root'))
