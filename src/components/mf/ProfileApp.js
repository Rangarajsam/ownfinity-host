import React, {useEffect, useRef} from "react";
import {mount, unmount} from "profile/ProfileApp";

export default function(){
    const profileAppRef = useRef();

    useEffect(() =>{
        if(profileAppRef.current){
            mount(profileAppRef.current);
        }
        
        return () => {
            if(profileAppRef.current) {
                unmount(profileAppRef.current);
            }
        };

    },[])

    return (
        <div ref={profileAppRef}></div>
    )
}