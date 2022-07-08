import { useState, useEffect, CSSProperties } from "react";

const scGap : number = 0.01 
const delay : number = 20 

export const useAnimatedScale = () => {
    const [scale, setScale] = useState(0)
    const [animated, setAnimated] = useState(false)

    return {
        scale, 
        start() {
            if (!animated) {
                setAnimated(true)
                const interval = setInterval(() => {
                    setScale((prev : number) => {
                        if (prev > 1) {
                            setAnimated(false)
                            clearInterval(interval)
                            return 0 
                        }
                        return prev + scGap 
                    })
                }, delay)
            }
        }
    }
}

export const useDimension = () => {
    const [w, setW] = useState(window.innerWidth)
    const [h, setH] = useState(window.innerHeight)
    useEffect(() => {
        window.onresize = () => {
            setW(window.innerWidth)
            setH(window.innerHeight)
        }
        return () => {
            window.onresize = () => {

            }
        }
    })
    return {
        w, 
        h 
    }
}

export const useStyle = (w : number, h : number, scale : number) => {
    const size : number = Math.min(w, h) / 10 
    const position = 'absolute'
    return {
        parentStyle() : CSSProperties {
            const left = `${w / 2}px`
            const top = `${h / 2}px`
            return {
                position, 
                left, 
                top  
            }
        },
        blockStyle(i : number) : CSSProperties {
            const left = `${-size / 2 + (w / 2 - size / 2) * scale * (1 - 2 * i)}px`
            const top = `${-size / 2}px`
            const width = `${size}px`
            const height = `${size}px`
            const background = 'indigo'
            return {
                width, 
                height, 
                left, 
                top, 
                background,
                position 
            }
        },

    }
}