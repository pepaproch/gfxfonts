import React, { useState } from 'react';
import { Col, Container, Nav, Row } from 'react-bootstrap';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Provider } from 'react-redux';
import { appStore } from './Store';
import { Font } from 'fontkit';
import { FontsPreview } from './FontsPreview';
import { NavLink, Route, Routes } from 'react-router-dom';

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
            <Container fluid className={'wrapper'}>
                <Row>
                    <Col sm={3}>
                        <div className="sidebar">
                            <div className="sidebar-wrapper">
                                <div className="logo d-flex align-items-center justify-content-start">
                                    <div className="logo-img">
                                        <i className={'fa-solid fa-blender'}/>
                                    </div>

                                    <a className="simple-text" href="/">
                                        Font Mixer
                                    </a>

                                </div>
                                 <hr/>
                                <Nav defaultActiveKey="/" className="flex-column">
                                    <li><NavLink className={"nav-link"} to="/fonts"><p>Fonts</p></NavLink></li>
                                    <li><NavLink className={"nav-link"} to="/codes"><p>Codes Mapping</p></NavLink></li>
                                    <li><NavLink className={"nav-link"}  to="/output"><p>Output</p></NavLink></li>
                                </Nav>

                            </div>
                        </div>
                    </Col>
                    <Col sm={9}>
                        <Routes>
                            <Route path='/' element={<h1>H</h1>} />
                            <Route path='/fonts' element={<FontsPreview handleSetAvailableFonts={handleSetAvailableFonts} availableFonts={availableFonts} />} />
                            <Route path='/codes' element={<h1>C</h1>} />
                        </Routes>



                    </Col>

                </Row>
                <div className="clear"/>
            </Container>
        </Provider>

    );
}

export default App;
