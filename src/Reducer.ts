import { Font } from 'fontkit';
import { combineReducers } from 'redux';

export interface Action<P> {
    type: string;
    payload: P
}

// action method for redux actions
export interface ActionMethod<P> {
    (...args: any): Action<P>;
}

interface FontState {
    fonts:Font[]
    selectedFont:Font | null
}

export enum FontActions {
    SET_FONT = 'SET_FONT',
    PARSE_FONT = 'PARSE_FONT'
}
export enum FileActions {
    ADD_FILE = 'ADD_FILE',
    REMOVE_FILE = 'REMOVE_FILE',
    UPLOAD_FILE = 'UPLOAD_FILE'
}












export const  filterReducer = (uniqChars:Set<number>, action:Action<Set<number>>):Set<number> =>
 {
     switch (action.type) {
            case 'addFilterChars':
                return new Set([...uniqChars, ...action.payload])
            default:return uniqChars;

     }


 }

 const fonts: FontState = {
    fonts: [],
     selectedFont: null
 }
 export const fontReducer =  (state:FontState = fonts, action:Action<Font>):FontState => {
    switch (action.type) {
        case FontActions.SET_FONT:
            return { ...state, selectedFont: action.payload } as FontState
        case FontActions.PARSE_FONT:
            return { ...state, ...action.payload } as FontState
        default:
            return state;

    }
 }

export const rootReducer = combineReducers({
    font: fontReducer,
});