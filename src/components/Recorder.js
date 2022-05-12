import React, { Component } from "react";

import { useReactMediaRecorder } from "react-media-recorder";

export default function Recorder(props) {
    let { status, startRecording, stopRecording, mediaBlobUrl, error } = useReactMediaRecorder({
        screen: true,
        askPermissionOnMount: true,
        video: true,
    });

    React.useEffect(() => {
        startRecording();
    }, []);

    return (
        <div className="recorder">
        </div>
    )
}