import React, {useRef, useEffect} from 'react';
import { mount, unmount } from 'authorization/AuthorizationApp';

export default function() {
     const authorizationAppRef = useRef();
     useEffect(() => {
            if(authorizationAppRef.current) {
                mount(authorizationAppRef.current);
            }
            
            return () => {
                if(authorizationAppRef.current) {
                    unmount(authorizationAppRef.current);
                }
            };
     }, [])

     return (
        <div ref={authorizationAppRef}></div>
     )
}