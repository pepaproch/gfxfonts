import * as fs from "fs";
import * as figlet from "figlet";


import  { Command } from "commander";


export  class UnicodeTablesConverter    {
    /*  read file as lines use .readLineSync */
    static  readFileAsLines(path: string) {
        fs.readFileSync(path, 'utf-8').split(/\r?\n/).map((line: string) => {
            console.log(line);
            return line;
        });

    }
}


const program = new Command();

console.log(figlet.textSync("Karma ts Generator"));

program
    .version("1.0.0")
    .description("Generate json object from ")
    .option("-i, --input  [file]", "Unicode map txt file")
    .option("-o, --output [file]", "Output directory" )
    .parse(process.argv);
const options = program.opts();
if (options.input) {
    UnicodeTablesConverter.readFileAsLines(options.input);

}

export default program




