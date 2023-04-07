import React, {useReducer, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import FontParser from "./FontParser";
import {FontUpload} from "./FontUpload";
import "bootstrap/dist/css/bootstrap.min.css";
import {AsciiTable} from "./Ascii";
import {filterReducer} from "./Reducer";

function App() {

    let [uniqChars, dispatch] = useReducer(filterReducer, new Set<number>() );


    const  handleAddFilterCharacters = (newChars:string)=> {
        console.log("dispatch", newChars)
        const filter = []
        for(let i = 0 ; i < newChars.length ; i++ ) {
                filter.push(newChars.charCodeAt(i))

        }
        console.log("filer" , filter)
        dispatch({
            id: 'addFilterChars',
            payload: new Set(filter),
        });

    }


  return (
      <div  className="app container" style={{ width: "600px" }} >
          <h1>Adafruit GFX P(U+00ED)smoTvo(U+0159)itel</h1>
          <FontUpload>
          <AsciiTable  uniqChars={uniqChars} handleAddFilterCharacters={handleAddFilterCharacters} gfx={true} />
          </FontUpload>

                </div>
  );
}

export default App;
