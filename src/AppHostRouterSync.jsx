import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { eventBus } from "./event-bus";

const AppHostRouterSync = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const locationRef = useRef(location.pathname);
    const navigateRef = useRef(navigate);

    // Keep refs in sync with current values
    useEffect(() => {
        locationRef.current = location.pathname;
    }, [location.pathname]);

    useEffect(() => {
        navigateRef.current = navigate;
    }, [navigate]);

    // Register listener once on mount
    useEffect(() => {
        const onRemoteNavigate = (path) => {
            console.log("onRemoteNavi from host listener", path)
            if (path !== locationRef.current) {
                navigateRef.current(path);
            }
        }
        console.log("Host router sync mounted, listening for remote:navigate");
        eventBus.on("remote:navigate", onRemoteNavigate);

        return () => {
            eventBus.off("remote:navigate", onRemoteNavigate);
        }

    }, []);

    // Emit host navigation changes
    // test comment for workflow run
    useEffect(() => {
        console.log("Host route changed, emitting host:navigate", location.pathname);
        eventBus.emit("host:navigate", location.pathname);
    }, [location.pathname]) 

    return null;
};

export default AppHostRouterSync;