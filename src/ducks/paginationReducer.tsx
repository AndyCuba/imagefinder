import { AppStateType } from '../redux/store';
import { SET_SEARCHFIELD, SetSearchfieldActionType } from './imagesReducer';

export const CHANGE_PAGE = 'CHANGE_PAGE';

export const pageNumberSelector = (state: AppStateType) => state.pagination.pageNumber;
export const offsetSelector = (state: AppStateType) => state.pagination.offset;
export const pageLimitSelector = (state: AppStateType) => state.pagination.pageLimit;

type ActionTypes = ChangePageActionType | SetSearchfieldActionType;

type InitialPaginationsStateType = {
    pageNumber: number,
    offset: number,
    pageLimit: number
};

type ChangePageActionType = {
    type: typeof CHANGE_PAGE,
    pageNumber: number,
    offset: number
};

export const changePageAction = (pageNumber: number): ChangePageActionType => ({
    type: CHANGE_PAGE,
    pageNumber,
    offset: (pageNumber - 1) * 9
});

export const initialPaginationsState: InitialPaginationsStateType = {
    pageNumber: 1,
    offset: 0,
    pageLimit: 9
};

export const paginationsReducer = (state = initialPaginationsState, action: ActionTypes) => {
    switch (action.type) {
        case CHANGE_PAGE:
            return { ...state, pageNumber: action.pageNumber, offset: action.offset }
        case SET_SEARCHFIELD:
            return initialPaginationsState;
        default:
            return { ...state };
    }

};