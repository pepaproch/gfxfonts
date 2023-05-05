import React, {useEffect, useReducer} from "react";
import {
    printf,
} from 'fast-printf';
import {Action, filterReducer} from "./Reducer";
import {Font} from "fontkit";
import {FontRender} from "./components/FontRender";
interface  AsciiProps {
    gfx:boolean
    handleAddFilterCharacters:any
    uniqChars:Set<number>
    font?:Font
}
export  interface FilterProps {
    dispatch: any
    uniqChars:Set<number>
}
export const FilterCharacters  : React.FC<FilterProps> = (props)=> {

    useEffect(() => {
        console.log(props.uniqChars)
    }, [props.uniqChars]);
    return (

        <form onSubmit={()=>{}}>

            <div className='fv-row mb-3'>
                <label className='form-label fw-bolder text-dark fs-6'>email</label>

                <input
                    className='form-control'
                    placeholder='email'
                    type='email'
                    value={String.fromCharCode(...props.uniqChars)}
                    onChange={e => props.dispatch( e.currentTarget.value )}
                />
            </div>
        </form>
    );
}

export const AsciiTable: React.FC<AsciiProps> = (props) => {

    useEffect(() => {
       console.log(props.uniqChars)
    }, [props.uniqChars]);
    return(<div className={"container"}><table className={"table table-bordered"} border={1}>

        <thead title={"ASCII"}><th></th> {
            Array(16)
            .fill(0,)
            .map((value, index) => {

               return (<th key={"he_" + index}>{printf("%02x" , index) }</th>)
            })
        }
        </thead>
        <tbody> {

         Array(16)
                .fill(0,)
                .map((ri, row) => {
                    return (<tr key={"bo_" + row}>
                        {printf("%02x" , row) }
                        {
                            Array(16)
                                .fill(0,)
                                .map((value, coll) => {
                                    const idx = (row*16)+coll
                                    const css  =  props.uniqChars && props.uniqChars.has(idx) ? "selected" : ""
                                    return (<td className={css} key={"b_" +idx }>
                                        { props.font && props.gfx &&
                                            <FontRender key={"b_" +idx } font={props.font} content={String.fromCharCode(idx + 59648)} fontSize={30} width={30} height={30}></FontRender> }
                               </td>)
                                })
                        }
                    </tr>)
                })
        }
        </tbody>
    </table>
    <FilterCharacters uniqChars={props.uniqChars} dispatch={props.handleAddFilterCharacters} />
    </div>
    )

}