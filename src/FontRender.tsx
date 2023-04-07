import React, {useEffect, useState} from "react";
import {Font} from "fontkit";

export interface FontRenderProps {
    font: Font;
    content: string;
    children?: React.ReactNode
    fontSize?: number;
    width: number;
    height: number;

}

export const FontRender: React.FC<FontRenderProps> = (props) => {

    const renderText = (ctx: CanvasRenderingContext2D | null) => {
        console.log("render text" ,ctx);
          if (!ctx) return;
        ctx.save();

        ctx.clearRect(0, 0, props.width, props.height);





        // iterate text runs
        console.log("content" , props.content)
        let run = props.font.layout(props.content ,  );
       // ctx.rotate(2);
        ctx.translate(0,100);
        ctx.scale(1, -1)
       // ctx.rotate(9)
        run.glyphs.forEach((glyph, index) => {
            console.log("glyph" , glyph)



            glyph.render(ctx, props.fontSize || 30);



        });


    }


    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
            console.log(`hookRef div width: ${canvasRef.current.clientWidth}`);
            renderText(canvasRef.current.getContext('2d'))
        }
    });


    return (<>
            <div className="font-render">
                <div className="font-render__content">
                    <canvas   width={30}
                              height={30}
                              ref={canvasRef}></canvas>
                </div>
            </div>
        </>
    );

}