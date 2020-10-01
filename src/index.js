import React from 'react';
import ReactDOM from 'react-dom';
import { Provider,  } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import { createLogger} from 'redux-logger';
import './index.css';
import App from './containers/App';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import { searchRobots } from './reducers';

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));        //creation of a store (serachRobots is our rootReducer)

ReactDOM.render(
    <Provider store={store}>   {/* the provide component is gonna take care of passing down the store to all the components down the component tree from the app */}
        <App />
    </Provider>,
    document.getElementById('root'));
registerServiceWorker();
