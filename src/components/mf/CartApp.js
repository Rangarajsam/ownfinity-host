import React, {useEffect, useRef} from "react";
import {mount} from "cart/CartApp";

export default function() {
    const cartAppRef = useRef();
    useEffect(() => {
        if(cartAppRef.current) {
            mount(cartAppRef.current);
        }
    }, [])

    return (
        <div ref={cartAppRef}></div>
    )
}