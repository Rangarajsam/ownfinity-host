import React, { useRef, useEffect } from 'react';
import { mount } from 'header/HeaderApp';

export default function () {
    const headerAppRef = useRef();
    useEffect(() => {
        if (headerAppRef.current) {
            mount(headerAppRef.current);
        }
    }, [])

    return (
        <div ref={headerAppRef}></div>
    )
}