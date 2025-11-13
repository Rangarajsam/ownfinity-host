import React, {useEffect, useRef} from "react";
import {mount} from "profile/ProfileApp";

export default function(){
    const profileAppRef = useRef();

    useEffect(() =>{
        if(profileAppRef.current){
            mount(profileAppRef.current);
        }

    },[])

    return (
        <div ref={profileAppRef}></div>
    )
}