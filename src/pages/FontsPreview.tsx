import React from 'react';

import { Alert, Col, Row } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import { FontRender } from '../components/FontRender';
import { Font } from 'fontkit';
import GlyphsPreview from '../components/GlyphsPreview';

interface FontsPreviewProps {

    availableFonts:Font[]
}

export const FontsPreview: React.FC<FontsPreviewProps> = (props) => {


    return (
        <div className={'container-fluid mb-3'}>


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
                            <Col key={index}>
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