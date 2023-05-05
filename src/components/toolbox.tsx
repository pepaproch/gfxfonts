import {Route, Routes} from "react-router-dom";
import {Font} from "fontkit";
import React from "react";
import {FontUpload} from "./FontUpload";



interface ToolboxProps {
    handleSetAvailableFonts: (fonts: Font[]) => void
}

export const Toolbox: React.FC<ToolboxProps> = (props) => {
    return (
        <div className="toolbox">

            <div className={'tools'}>
                <div className={'row'}>
                    <div className={'col-9'} ></div>
                    <div className={'col-3'}>
                        <Routes>
                            <Route path='/' element={<h1>Home</h1>} />
                            <Route path='/fonts' element={ <FontUpload  handleAddFonts={props.handleSetAvailableFonts}/> } />
                            <Route path='/codes' element={ <h1>Codes</h1> } />
                        </Routes>

                    </div>
                </div>
            </div>



        </div>)
}
