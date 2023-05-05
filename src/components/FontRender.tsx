import React, { useEffect } from 'react';
import { Font } from 'fontkit';

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

        ctx.clearRect(0, 0, props.width, props.height);
        // iterate text runs
        console.log("content" , props.content)
        try {
        let run = props.font.layout(props.content ,  );

        let scale = 1 / props.font.unitsPerEm * (props.fontSize || 30);
        let x = 0;
        let y = 0;
    //log scale
        console.log("scale" , scale)

        ctx.save();
        ctx.translate(0,30);
        ctx.scale(1, -1);
       // ctx.rotate(9)

        run.glyphs.forEach((glyph, index) => {



            let pos = run.positions[index];
            console.log("pos",pos);
            ctx.save();
            ctx.translate((x  + pos.xOffset  ) * scale, (y  + pos.yOffset) * scale);

            console.log("glyph" , glyph)
            ctx.beginPath();
            glyph.render(ctx, props.fontSize || 30);
            ctx.restore();
            x += (pos.xAdvance + 10 );
            y += pos.yAdvance;


        });
        } catch (e) {
            console.log("error" , e)
        }
        ctx.restore();

    }


    const canvasRef = React.useRef<HTMLCanvasElement>(null);
    useEffect(() => {
        if (canvasRef.current) {
           /// console.log(`hookRef div width: ${canvasRef.current.clientWidth}`);
            renderText(canvasRef.current.getContext('2d'))
        }
    });


    return (<>
            <div className="font-render">
                <div className="font-render__content">
                    <canvas   width={props.width}
                              height={props.height}
                              ref={canvasRef}></canvas>
                </div>
            </div>
        </>
    );

}