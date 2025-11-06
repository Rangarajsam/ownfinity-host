import React, { useRef, useEffect } from 'react';
import { mount } from 'wishlist/WishlistApp';

export default function() {
    const wishlistAppRef = useRef();
    useEffect(() => {
        if(wishlistAppRef.current){
            mount(wishlistAppRef.current);
        }
    }, [])
    return (
        <div ref={wishlistAppRef}></div>
    )
}