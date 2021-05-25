import { combineReducers } from 'redux';
import { imagesReducer } from './reducers/imagesReducer';
import { paginationsReducer } from './reducers/paginationReducer';


const rootReducer = combineReducers({
    data: imagesReducer,
    pagination: paginationsReducer
});

export default rootReducer;