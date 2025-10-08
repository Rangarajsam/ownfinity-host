import React, { useRef, useEffect } from 'react';
import { mount } from "products/ProductsApp";

export default function () {
    const productsAppRef = useRef();
    useEffect(() => {
        if (productsAppRef.current) {
            mount(productsAppRef.current);
        }
    }, [])

    return (
        <div ref={productsAppRef}></div>
    )
}