import { combineReducers } from 'redux';
import { imagesReducer } from '../ducks/imagesReducer';
import { paginationsReducer } from '../ducks/paginationReducer';


const rootReducer = combineReducers({
    data: imagesReducer,
    pagination: paginationsReducer
});

export default rootReducer;