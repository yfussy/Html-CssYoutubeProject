const videos = [{
    title: 'Talking Tech and AI with Google CEO Sundar Pichai!',
    thumbnail: 'thumbnails/thumbnail-1.webp',
    videoDuration: '14:20',
    videoLink: 'https://www.youtube.com/watch?v=n2RNcPRtAiY',
    channel: 'Marques Brownlee',
    channelProfile: 'channel-pictures/channel-1.jpeg',
    channelLink: 'https://www.youtube.com/@mkbhd',
    subscribers: '19M',
    views: '4.2M',
    datePublished: '3 years',
}, {
    title: 'Try Not To Laugh Challenge #9',
    thumbnail: 'thumbnails/thumbnail-2.webp',
    videoDuration: '8:22',
    videoLink: 'https://www.youtube.com/watch?v=mP0RAo9SKZk',
    channel: 'Markipiler',
    channelProfile: 'channel-pictures/channel-2.jpeg',
    channelLink: 'https://www.youtube.com/@markiplier',
    subscribers: '36.7M',
    views: '21M',
    datePublished: '6 years',
}, {
    title: 'Crazy Tik Toks Taken Moments Before DISASTER',
    thumbnail: 'thumbnails/thumbnail-3.webp',
    videoDuration: '9:13',
    videoLink: 'https://www.youtube.com/watch?v=FgjPQQeTh1w',
    channel: 'SSSniperWolf',
    channelProfile: 'channel-pictures/channel-3.jpeg',
    channelLink: 'https://www.youtube.com/@SSSniperWolf',
    subscribers: '34.5M',
    views: '14M',
    datePublished: '3 years',
}, {
    title: 'The Simplest Math Problem No One Can Solve - Collatz Conjecture',
    thumbnail: 'thumbnails/thumbnail-4.webp',
    videoDuration: '22:09',
    videoLink: 'https://www.youtube.com/watch?v=094y1Z2wpJg',
    channel: 'Veritasium',
    channelProfile: 'channel-pictures/channel-4.jpeg',
    channelLink: 'https://www.youtube.com/@Veritasium',
    subscribers: '40M',
    views: '40M',
    datePublished: '2 years',
}, {
    title: "Kadane's Algorithm to Maximum Sum Subarray Problem",
    thumbnail: 'thumbnails/thumbnail-5.webp',
    videoDuration: '11:17',
    videoLink: 'https://www.youtube.com/watch?v=86CQq3pKSUw',
    channel: 'CS Dojo',
    channelProfile: 'channel-pictures/channel-5.jpeg',
    channelLink: 'https://www.youtube.com/@CSDojo',
    subscribers: '1.93M',
    views: '695k',
    datePublished: '8 years',
}, {
    title: "Anything You Can Fit In The Circle I’ll Pay For",
    thumbnail: 'thumbnails/thumbnail-6.webp',
    videoDuration: '19:59',
    videoLink: 'https://www.youtube.com/watch?v=yXWw0_UfSFg',
    channel: 'MrBeast',
    channelProfile: 'channel-pictures/channel-6.jpeg',
    channelLink: 'https://www.youtube.com/@MrBeast',
    subscribers: '291M',
    views: '295',
    datePublished: '4 years',
} ];


class Video {
    title;
    thumbnail;
    videoDuration;
    videoLink;
    channel;
    channelProfile;
    channelLink;
    subscribers;
    views;
    datePublished;

    constructor (video) {
        this.title = video.title;
        this.thumbnail = video.thumbnail;
        this.videoDuration = video.videoDuration;
        this.videoLink = video.videoLink;
        this.channel = video.channel;
        this.channelProfile = video.channelProfile
        this.channelLink = video.channelLink;
        this.subscribers = video.subscribers;
        this.views = video.views;
        this.datePublished = video.datePublished;
    }
}

export let videoList = videos.map(video => {
    return new Video(video);
});

