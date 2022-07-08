import React from 'react'
import { useStyle } from './hooks'
import withContext from './withContext'

interface SideDownSquareProps {
    w : number, 
    h : number, 
    onClick : Function, 
    scale : number 
}
const SideDownSquare = (props : SideDownSquareProps) => {
    const {parentStyle, blockStyle} = useStyle(props.w, props.h, props.scale)
    return (
        <div style = {parentStyle()}>
            {[0, 1].map((i : number) =>  (<div key = {`block_${i}`} style = {blockStyle(i)}></div>))}
        </div>
    )
}

export default withContext(SideDownSquare)
