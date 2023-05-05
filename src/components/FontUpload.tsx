import React, { useEffect, useRef, useState } from 'react';

import { Font } from 'fontkit';
import FontParser from '../FontParser';
import { Button, Modal } from 'react-bootstrap';

export interface IFile {
    file: File
}

export interface FontUploadProps {
    handleAddFonts: (font: Font[]) => void;
    children?: React.ReactNode
}

export const FontUpload: React.FC<FontUploadProps> = (props) => {

    const [selectedFiles, setSelectedFiles] = useState<IFile[]>([]);
    const [isUploading, setIsUploading] = useState<boolean>(false);
    const [progress, setProgress] = useState<number>(0);

    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        if (files !== null) {
            const addFiles: IFile[] = []
            for (let c of files) {
                addFiles.push({ file: c } as IFile);
            }
            setSelectedFiles([...selectedFiles, ...addFiles]);
        }
    };
    const inputRef = useRef<HTMLInputElement>(null);
    const upload = async () => {
        setIsUploading(true);
        let progress = 100 / selectedFiles.length;
        setProgress(0);
        const map = selectedFiles
            .map((file, index) =>
                FontParser.parse(file.file, setProgress).then(res => res));
        setProgress(50);
        console.log('map', map);
        Promise.all(map).then(res => {
            console.log('adding fonts', res);
            props.handleAddFonts(res);
            setProgress(100);

        })
        setSelectedFiles([]);
        setIsUploading(false);
        if(inputRef.current)
        inputRef.current.value = '';
        handleClose()
    };
    useEffect(() => {
        console.log('use effect')
    }, []);
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Button variant="primary" onClick={handleShow}>Add Font
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Upload fonts</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div>
                    <div className="row">
                        <div className="col-8">
                            <label className="btn btn-default p-0">
                                <input type={'file'} ref={inputRef} onChange={selectFile}/>
                            </label>
                        </div>
                    </div>

                    { (
                        <div className="progress my-3">
                            <div
                                className="progress-bar progress-bar-info"
                                role="progressbar"
                                aria-valuenow={progress}
                                aria-valuemin={0}
                                aria-valuemax={100}
                                style={{ width: progress + '%' }}
                            >
                                {progress}%
                            </div>
                        </div>
                    )
                    }
                    <div>

                    </div>
                </div>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary"  disabled={!setSelectedFiles.length}
                            onClick={upload} >Upload</Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};
