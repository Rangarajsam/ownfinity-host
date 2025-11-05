import React, {useRef, useEffect} from 'react';
import { mount } from 'authorization/AuthorizationApp';

export default function() {
     const authorizationAppRef = useRef();
     useEffect(() => {
            if(authorizationAppRef.current) {
                mount(authorizationAppRef.current);
            }
     }, [])

     return (
        <div ref={authorizationAppRef}></div>
     )
}