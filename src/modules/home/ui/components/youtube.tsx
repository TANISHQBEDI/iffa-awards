"use client";

import React from "react";

type YoutubeProps = {
    videoId: string;
    playlistId?: string;
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    controls?: boolean;
};

const Youtube = ({
                     videoId,
                     playlistId,
                     autoplay = true,
                     muted = true,
                     loop = true,
                     controls = false,
                 }: YoutubeProps) => {

    const params = new URLSearchParams({
        autoplay: autoplay ? "1" : "0",
        mute: muted ? "1" : "0",
        controls: controls ? "1" : "0",
        modestbranding: "1",
        rel: "0",
        playsinline: "1",
        loop: loop ? "1" : "0",
        playlist: playlistId ?? videoId,
    }).toString();

    return (
        <iframe
            className="aspect-video w-full pointer-events-none"
            src={`https://www.youtube.com/embed/${videoId}?${params}`}
            title="YouTube trailer"
            allow="autoplay; encrypted-media; picture-in-picture"
            allowFullScreen
        />
    );
};

export default Youtube;
