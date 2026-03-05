import React, { useRef, useEffect } from 'react';
import { mount, unmount } from 'wishlist/WishlistApp';

export default function() {
    const wishlistAppRef = useRef();
    useEffect(() => {
        if(wishlistAppRef.current){
            mount(wishlistAppRef.current);
        }
        
        return () => {
            if(wishlistAppRef.current) {
                unmount(wishlistAppRef.current);
            }
        };
    }, [])
    return (
        <div ref={wishlistAppRef}></div>
    )
}