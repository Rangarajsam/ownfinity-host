import React, {useEffect, useRef} from "react";
import {mount, unmount} from "cart/CartApp";

export default function() {
    const cartAppRef = useRef();
    useEffect(() => {
        if(cartAppRef.current) {
            mount(cartAppRef.current);
        }
        
        return () => {
            if(cartAppRef.current) {
                unmount(cartAppRef.current);
            }
        };
    }, [])

    return (
        <div ref={cartAppRef}></div>
    )
}