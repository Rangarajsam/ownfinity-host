import React, { useRef, useEffect } from 'react';
import { mount, unmount } from 'header/HeaderApp';

export default function () {
    const headerAppRef = useRef();
    useEffect(() => {
        if (headerAppRef.current) {
            mount(headerAppRef.current);
        }
        
        return () => {
            if (headerAppRef.current) {
                unmount(headerAppRef.current);
            }
        };
    }, [])

    return (
        <div ref={headerAppRef}></div>
    )
}