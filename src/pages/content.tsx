
import {Alert, Col, Container, Nav, Row} from "react-bootstrap";
import {NavLink, Route, Routes} from "react-router-dom";
import {FontsPreview} from "./FontsPreview";
import React from "react";
import {Font} from "fontkit";
import {FontUpload} from "../components/FontUpload";
import Card from "react-bootstrap/Card";
import GlyphsPreview from "../components/GlyphsPreview";
import {FontRender} from "../components/FontRender";
import {Sidebar} from "../components/sidebar";
import {Toolbox} from "../components/toolbox";

interface ContentProps {
    handleSetAvailableFonts: (fonts: Font[]) => void
    availableFonts: Font[]
}

export const Content: React.FC<ContentProps> = (props) => {
    return (
        <Container fluid className={'wrapper'}>
            <Row>
                <Col sm={3}>
                   <Sidebar/>
                </Col>
                <Col sm={9}>
                    <div className={'container-fluid mb-3'}>
                        <Toolbox handleSetAvailableFonts={props.handleSetAvailableFonts}/>
                    </div>
                    <Routes>
                        <Route path='/' element={<h1>Home</h1>} />
                        <Route path='/fonts' element={<FontsPreview  availableFonts={props.availableFonts} />} />
                        <Route path='/codes' element={<h1>Codes</h1>} />
                    </Routes>


                </Col>

            </Row>
            <div className="clear"/>
        </Container>
    );
};
