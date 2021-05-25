import { getUniquePhotos } from '../../helpers/helpers';
import { AppDispatch, AppStateType } from '../store';

const GET_DATA_REQUESTED = 'GET_DATA_REQUESTED';
const GET_DATA_SUCCEDED = 'GET_DATA_SUCCEDED';
const GET_DATA_FAILED = 'GET_DATA_FAILED';
const ADD_PHOTO = 'ADD_PHOTO';
const REMOVE_PHOTO = 'REMOVE_PHOTO';
export const SET_SEARCHFIELD = 'SET_SEARCHFIELD';

//Selectors
export const bookmarkedImagesSelector = (state: AppStateType) => state.data.bookmarkedImages;
export const recievedImagesSelector = (state: AppStateType) => state.data.recievedImages.photo;
export const serchfieldSelector = (state: AppStateType) => state.data.searchfield;
export const totalItemsCountSelector = (state: AppStateType) => state.data.recievedImages.total;

//Types
type ActionsTypes = RequestDataActionType | RequestDataSuccessActionType | RequestDataSuccessActionType | 
    RequestDataErrorActionType | SetSearchfieldActionType | AddPhotoActionType | RemovePhotoActionType;

export type RecievedPhotoObjType = {
    id: string,
    farm: number,
    title: string,
    server: string,
    secret: string
};

type RecievedImagesType = {
    photo: RecievedPhotoObjType[],
    total: string
};

type InititalStateType = {
    recievedImages: RecievedImagesType,
    bookmarkedImages: RecievedPhotoObjType[],
    isFetching: boolean,
    searchfield: string,
    error: string | null
};

type RequestDataActionType = {
    type: typeof GET_DATA_REQUESTED
};

type RequestDataSuccessActionPayloadType = {
    photo: RecievedPhotoObjType[]
};

type RequestDataSuccessActionType = {
    type: typeof GET_DATA_SUCCEDED,
    payload: RequestDataSuccessActionPayloadType
};

type RequestDataErrorActionType = {
    type: typeof GET_DATA_FAILED,
    payload: string | null
};

export type SetSearchfieldActionType = {
    type: typeof SET_SEARCHFIELD,
    searchfield: string
};

type AddPhotoActionType = {
    type: typeof ADD_PHOTO,
    payload: string
};

type RemovePhotoActionType = {
    type: typeof REMOVE_PHOTO,
    payload: string
};

//Action creators

const requestData = (): RequestDataActionType => ({
    type: GET_DATA_REQUESTED
});
  
const requestDataSuccess = (data: RequestDataSuccessActionPayloadType): RequestDataSuccessActionType => ({
    type: GET_DATA_SUCCEDED, 
    payload: data
});
  
const requestDataError = (error: string | null): RequestDataErrorActionType => ({
     type: GET_DATA_FAILED, 
     payload: error
});

export const setSearchfield = (value: string): SetSearchfieldActionType => ({
    type: SET_SEARCHFIELD,
    searchfield: value
})

export const addPhotoAction = (id: string): AddPhotoActionType => ({
    type: ADD_PHOTO,
    payload: id
});

export const removePhotoAction = (id: string): RemovePhotoActionType => ({
    type: REMOVE_PHOTO,
    payload: id
});

export const fetchData = async (dispatch: AppDispatch, url: string, currentPage: number) => {
    dispatch(requestData());
    try{
        return fetch(`https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=6a041a8baa24763cc5c4265e521b8e34&text=${url}&per_page=18&page=${currentPage}&format=json&nojsoncallback=1`)
        .then(res => res.json())
        .then((photos) => dispatch(requestDataSuccess(photos.photos)));
    } catch(error) {
        dispatch(requestDataError(error.message))
    };
    
};

const initialState: InititalStateType = {
    recievedImages: {
        photo: [],
        total: '20'
    },
    bookmarkedImages: [],
    isFetching: false,
    searchfield: '',
    error: null
};

export const imagesReducer = (state = initialState, action: ActionsTypes): InititalStateType => {
    switch (action.type) {
        case GET_DATA_REQUESTED:
            return {
                ...state,
                isFetching: true
            };
        case GET_DATA_SUCCEDED:
            return {
                ...state,
                recievedImages: { 
                    ...state.recievedImages, 
                    ...action.payload,
                    photo: getUniquePhotos([...state.recievedImages.photo, ...action.payload.photo])
                },
                isFetching: false,
                error: null
            };
        case GET_DATA_FAILED:
            return {
                ...state,
                error: action.payload
            };
        case SET_SEARCHFIELD:
            return {
                ...state,
                searchfield: action.searchfield,
                recievedImages: initialState.recievedImages,
            };
        case ADD_PHOTO:
            return {
                ...state,
                bookmarkedImages: [ 
                    ...state.bookmarkedImages, 
                    state.recievedImages.photo[state.recievedImages.photo.findIndex((photo: RecievedPhotoObjType) => 
                        photo.id === action.payload)]
                ]
            };
        case REMOVE_PHOTO:
            return {
                ...state,
                bookmarkedImages: [
                   ...state.bookmarkedImages.filter((obj: RecievedPhotoObjType) => obj.id !== action.payload) 
                ]
            }
        default:
            return { ...state };
    }
};