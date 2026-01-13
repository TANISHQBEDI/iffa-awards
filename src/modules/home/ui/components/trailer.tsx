import React from 'react';
import Youtube from "@/modules/home/ui/components/youtube";


type BaseTrailerProps = {
    title: string;
    autoplay?: boolean;
    muted?: boolean;
    loop?: boolean;
    className?: string;
};

/* -------- YouTube -------- */
export type YoutubeTrailerProps = BaseTrailerProps & {
    source: "youtube";
    videoId: string;
    playlistId?: string;
    controls?: boolean;
};

/* -------- Local Video -------- */
export type LocalTrailerProps = BaseTrailerProps & {
    source: "local";
    src: string;
    poster?: string;
};

export type TrailerProps = YoutubeTrailerProps | LocalTrailerProps;

const Trailer = (props: TrailerProps) => {
    return (
        <div className="relative w-full overflow-hidden">
            <div className='flex flex-row items-center space-x-2'>
                <div className='w-10 h-px bg-yellow-400' />
                <span>{props.title}</span>
            </div>

            {props.source === "youtube" && (
                <Youtube
                    videoId={props.videoId}
                    playlistId={props.playlistId}
                    autoplay={props.autoplay}
                    muted={props.muted}
                    loop={props.loop}
                    controls={props.controls}
                />
            )}

            {props.source === "local" && (
                <video
                    className="aspect-video w-full object-cover"
                    src={props.src}
                    poster={props.poster}
                    autoPlay={props.autoplay}
                    muted={props.muted}
                    loop={props.loop}
                    playsInline
                />
            )}
        </div>
    );
};

export default Trailer;

