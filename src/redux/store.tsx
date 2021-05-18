import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './rootReducer';


const middlewares = [
    applyMiddleware(thunk)
];

const composedEnhancers = composeWithDevTools(
    ...middlewares
);

const store = createStore(
    rootReducer,
    composedEnhancers
);

type RootReducerType = typeof rootReducer;
export type AppStateType = ReturnType<RootReducerType>;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;