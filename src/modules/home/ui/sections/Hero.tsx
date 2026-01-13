import React from 'react';
import Trailer from "@/modules/home/ui/components/trailer";

const Hero = () => {
    return (
        <div>

            <Trailer
                title="The Poet"
                source="youtube"
                videoId="TeImQT9v1Jg"
                autoplay
                muted
                loop
            />
            <div>
                Join us
            </div>
            <Trailer
                title="Cassandra"
                source="youtube"
                videoId="7Pp5FiS0Lck"
                autoplay
                muted
                loop
            />
            <Trailer
                title="The Stolen Girl"
                source="youtube"
                videoId="huMtYtMoN24"
                autoplay
                muted
                loop
            />

        </div>
    );
};

export default Hero;