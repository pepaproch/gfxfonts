import React, { useState } from 'react';
import { Font } from 'fontkit';
import { Modal } from 'react-bootstrap';
import { FontRender } from './FontRender';


interface GlyphsPreviewProps {
    font: Font; // from fontkit
}

const GlyphsPreview: React.FC<GlyphsPreviewProps> = (props: GlyphsPreviewProps) => {
    const { font } = props;

    const [lgShow, setLgShow] = useState(false);
    let content = [];



    return (
        <>
            <i onClick={() => setLgShow(true)} className={'btn fa-classic fa-rectangle-list'}/>
            <Modal
                size="lg"
                show={lgShow}
                onHide={() => setLgShow(false)}
                aria-labelledby="example-modal-sizes-title-lg"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-modal-sizes-title-lg">
                        Large Modal
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                           <GlyphsTable font={font} codes={font.characterSet} columns={16}/>
                    </div>
                </Modal.Body>
            </Modal>


        </>
    );


};

interface GlyphsTableProps {
    font: Font;
    codes: number[];
    columns: number;
}

const GlyphsTable: React.FC<GlyphsTableProps> = (props: GlyphsTableProps) => {

    const { font } = props;
    const numRows = Math.ceil(props.codes.length / props.columns);
    return (
        <table >
            {
                Array(numRows).fill(0).map((item, row) => {
                    return (
                        <tr>
                            {
                                Array(props.columns).fill(0).map((item, index) => {
                                    const code = props.codes[(row * props.columns) + index];
                                    console.log('code',(row * props.columns) + index);

                                     const char =   code !== undefined ? String.fromCharCode(code) : ''

                                    return (
                                        <td>

                                            <FontRender width={30} height={30} content={char} font={font}/>
                                        </td>
                                    )
                                })
                                }
                        </tr>
                    )
                })
            }
        </table>    )

}
export default GlyphsPreview;
