import React, { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { appStore } from './store/Store';
import { Font } from 'fontkit';
import { FontsPreview } from './pages/FontsPreview';
import { NavLink, Route, Routes } from 'react-router-dom';
import {Content} from "./pages/content";

function App() {

    const [availableFonts, setAvailableFonts] = useState<Font[]>([]);

    //  let [uniqChars, dispatch] = useReducer(filterReducer, new Set<number>() );


    /*    const  handleAddFilterCharacters = (newChars:string)=> {
            console.log("dispatch", newChars)
            const filter = []
            for(let i = 0 ; i < newChars.length ; i++ ) {
                    filter.push(newChars.charCodeAt(i))

            }
            console.log("filer" , filter)
            dispatch({
                type: 'addFilterChars',
                payload: new Set(filter),
            });

        }*/

    const handleSetAvailableFonts = (fonts: Font[]) => {
        setAvailableFonts([...availableFonts, ...fonts])
    }


    return (
        <Provider store={appStore}>
        <Content handleSetAvailableFonts={handleSetAvailableFonts} availableFonts={availableFonts} />
        </Provider>

    );
}

export default App;
