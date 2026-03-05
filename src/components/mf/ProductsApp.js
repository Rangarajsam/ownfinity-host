import React, { useRef, useEffect } from 'react';
import { mount, unmount } from "products/ProductsApp";

export default function () {
    const productsAppRef = useRef();
    useEffect(() => {
        if (productsAppRef.current) {
            mount(productsAppRef.current);
        }
        
        return () => {
            if (productsAppRef.current) {
                unmount(productsAppRef.current);
            }
        };
    }, [])

    return (
        <div ref={productsAppRef}></div>
    )
}