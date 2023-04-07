import * as fontkit from "fontkit"
import {Buffer} from "buffer";
import {Font} from "fontkit";

const parse = async (file: File, onParseProgress: any): Promise<Font> => {

return  new Promise((resolve, reject) => {
    blobToBuffer(file, (err: any, buffer: any) => {
        if (err) {
            console.error(err);
            reject(err)
        }
        const font = fontkit.create(buffer);
        console.log(font);
        // log codepoints and glyph names for each glyph in the font
        console.log(font.glyphForCodePoint(0x0041).name);
        resolve(font);

    });
}

);
}




// read file as buffer
const blobToBuffer = (blob:File, callback: any) => {
    const reader = new FileReader();
    reader.onload = () => {
        callback(null, Buffer.from(reader.result as ArrayBuffer));
    };
    reader.onerror = callback;
    reader.readAsArrayBuffer(blob);
}


const FontParser = {
    parse,
};

export default FontParser;