import {
    createStore,
    combineReducers,
    applyMiddleware,
    compose,
} from 'redux';
import thunk from 'redux-thunk';

import authReducer from '../reducers/auth';
import leaderboardReducer from '../reducers/leaderboard';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose(); // eslint-disable-line

export default () => {
    const store = createStore(
        combineReducers({
            auth: authReducer,
            leaders: leaderboardReducer,
        }),
        composeEnhancers(applyMiddleware(thunk)),
        // window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
    );
    return store;
};
