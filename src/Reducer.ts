import {Font} from "fontkit";


export interface Action<T>  {
    id:string
    payload: T
 }


export const  filterReducer = (uniqChars:Set<number>, action:Action<Set<number>>):Set<number> =>
 {
     if (action.id === 'addFilterChars') {
        return new Set([...uniqChars, ...action.payload])

     } else {
         throw Error('Unknown action: ' + action.id);
     }
 }

 interface FontState {
    font:Font
 }

 export const FontReducer = (state:FontState, action:Action<FontState>):FontState => {
     if (action.id === 'setFont') {
         return {...state, font: action.payload.font }
     }  else {
         throw Error('Unknown action: ' + action.id);
     }
 }