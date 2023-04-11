import React from 'react';
import { FontUpload } from './FontUpload';
import { Alert, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontRender } from './FontRender';
import { Font } from 'fontkit';
import GlyphsPreview from './GlyphsPreview';

interface FontsPreview {
    handleSetAvailableFonts: (fonts:Font[])=>void;
    availableFonts:Font[]
}

export const FontsPreview: React.FC<FontsPreview> = (props) => {


    return (
        <div className={'container-fluid mb-3'}>
            <div className={'tools'}>
                <div className={'row'}>

                    <div className={'col-9'} ></div>

                    <div className={'col-3'}>
                        <FontUpload  handleAddFonts={props.handleSetAvailableFonts}/>
                    </div>
                </div>
            </div>
            <hr/>
            {
                props.availableFonts.length<1 && <Alert variant="success">
                    <Alert.Heading>Upload a font to get started</Alert.Heading>
                    <hr />
                    <p className="mb-0">
                        Upload all files you want to use in final font.
                    </p>
                </Alert>

            }

            <Row xs={1} md={2} className="g-4">
                {
                    props.availableFonts.map((font, index) => {
                        return (
                            <Col>
                                <Card border="light"   key={index} >
                                    <Card.Header>
                                        <Row>
                                            <Col>  <Card.Title>{font.fullName}<br></br></Card.Title>

                                            </Col>
                                            <Col>

                                                <Card.Subtitle className="text-muted">
                                                Gyphs: {font.numGlyphs}<GlyphsPreview  font={font} /></Card.Subtitle>
                                            </Col>

                                        </Row></Card.Header>

                                    <Card.Body>
                                        <Card.Text>
                                            <FontRender font={font} content={"ABCD Příliš žluťoučký kůň"} width={300} height={30} />
                                        </Card.Text>
                                        <small className="text-muted">{font.copyright}</small>
                                    </Card.Body>



                                </Card>
                            </Col>
                        )
                    })
                }
            </Row>

        </div>
    );
}