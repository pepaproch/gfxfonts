import React, {useEffect, useState} from "react";
import FontParser from "./FontParser";
import {Font} from "fontkit";

export default interface IFile {
    url: string,
    name: string,
    children?: React.ReactNode
}

export interface FontUploadProps {
    children?: React.ReactNode
}

export const FontUpload: React.FC<FontUploadProps> = (props) => {
    const [currentFile, setCurrentFile] = useState<File>();
    const [progress, setProgress] = useState<number>(0);
    const [message, setMessage] = useState<string>("");
    const [fileInfos, setFileInfos] = useState<Array<IFile>>([]);
    // font state
    const [font, setFont] = useState<Font>();
    const selectFile = (event: React.ChangeEvent<HTMLInputElement>) => {
        const {files} = event.target;
        const selectedFiles = files as FileList;
        setCurrentFile(selectedFiles?.[0]);
        setProgress(0);
    };

    const upload = () => {
        setProgress(0);
        if (!currentFile) return;
        console.log(currentFile)

        FontParser.parse(currentFile, setProgress).then(res => {
            setFont(res);

        });

    };
    useEffect(() => {
        console.log("use effect")
    }, []);
    return (
        <div>
            <div className="row">
                <div className="col-8">
                    <label className="btn btn-default p-0">
                        <input type="file" onChange={selectFile}/>
                    </label>
                </div>

                <div className="col-4">
                    <button
                        className="btn btn-success btn-sm"
                        disabled={!currentFile}
                        onClick={upload}
                    >
                        Upload
                    </button>
                </div>
            </div>

            {currentFile && (
                <div className="progress my-3">
                    <div
                        className="progress-bar progress-bar-info"
                        role="progressbar"
                        aria-valuenow={progress}
                        aria-valuemin={0}
                        aria-valuemax={100}
                        style={{width: progress + "%"}}
                    >
                        {progress}%
                    </div>
                </div>
            )}

            {message && (
                <div className="alert alert-secondary mt-3" role="alert">
                    {message}
                </div>
            )}

{/*            <div className="card mt-3">
                <div className="card-header">List of Files</div>
                <ul className="list-group list-group-flush">
                    {fileInfos &&
                        fileInfos.map((file, index) => (
                            <li className="list-group-item" key={index}>
                                <a href={file.url}>{file.name}</a>
                            </li>
                        ))}
                </ul>
            </div>*/}
            <div>

                {
                    React.Children.map(props.children, child => {
                        // Checking isValidElement is the safe way and avoids a
                        // typescript error too.
                        if (React.isValidElement(child) && font !== undefined) {
                            return React.cloneElement(child,  {...child.props ,font: font});
                        }

                        return child;
                    })


                }
            </div>
        </div>
    );
};
