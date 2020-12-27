import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Youtube from 'react-youtube';
import Card from '../shared/Card';

const YoutubeChannel = () => {
    const [videoId, setVideoId] = useState('Eme5lSQ7m8U');
    useEffect(() => {
        //`https://www.googleapis.com/youtube/v3/search?key={your_key_here}&channelId={channel_id_here}&part=snippet,id&order=date&maxResults=1`
        // AIzaSyDHZAd2d_qBpal7PKvdaB1KFmMJlEeU7i4  - api key
        // UCUT8RoNBTJvwW1iErP6-b-A   - channel id

        const fetchLastVideoId = async () => {
            await axios
                .get(
                    `https://www.googleapis.com/youtube/v3/search?key=${'AIzaSyDHZAd2d_qBpal7PKvdaB1KFmMJlEeU7i4'}&channelId=${'UCUT8RoNBTJvwW1iErP6-b-A'}&part=snippet,id&order=date&maxResults=1`
                )
                .then((data) => {
                    data?.data?.items[0]?.id.videoId && setVideoId(data?.data?.items[0]?.id.videoId);
                });

            //subscriber count
            // await axios.get(
            //     `https://www.googleapis.com/youtube/v3/channels?key=${'AIzaSyDHZAd2d_qBpal7PKvdaB1KFmMJlEeU7i4'}&id=${'UCUT8RoNBTJvwW1iErP6-b-A'}&part=${'statistics'}`).then((data)=>{
            //     data?.data?.items[0]?.statistics.subscriberCount && setSubscriberCount(data?.data?.items[0]?.statistics.subscriberCount)
            // })
        };

        fetchLastVideoId();
    }, []);

    return (
        <Card header="Youtube Channel">
            <Youtube
                className="youtube__video"
                videoId={videoId}
                opts={{
                    height: '390',
                    width: '640',
                    playerVars: {
                        autoplay: 1,
                    },
                }}
            />
        </Card>
    );
};

export default YoutubeChannel;
