import { videoList } from "../data/video.js";


function renderVideoPreview() {
    let videoPreviewGridHTML = '';

    videoList.forEach(video => {
        videoPreviewGridHTML += `
            <div class="video-preview">
                <div class="thumbnail-row">
                    <a href="${video.videoLink}">
                        <img class="thumbnail" src="${video.thumbnail}">
                    </a>
                    
                    <div class="video-time">
                        ${video.videoDuration}
                    </div>
                </div>

                <div class="video-info-grid">
                    <div class="channel-picture">
                        <a href="${video.channelLink}">
                            <img class="profile-picture" src="${video.channelProfile}">
                        </a>
                        <div class="channel-tooltip">
                            <div class="profile-picture-container">
                                <img class="profile-picture-tooltip" src="${video.channelProfile}">
                            </div>
                            <div class="channel-detail-tooltip">
                                <div class="channel-name-tooltip">
                                    ${video.channel}
                                </div>
                                <div class="channel-subscriber-tooltip">
                                    ${video.subscribers} Subscribers
                                </div>
                            </div>
                        </div> 
                    </div>
                    <div class="video-info">
                        <a class="video-title-link" href="${video.videoLink}">
                            <p class="video-title">
                                ${video.title}
                            </p>
                        </a>
                        
                        <a class="video-author-link" href="${video.channelLink}">
                            <p class="video-author">
                                ${video.channel}
                            </p>
                            <div class="tooltip">
                                ${video.channel}
                            </div>
                        </a>
            
                        <p class="video-stat">
                            ${video.views} views &#183; ${video.datePublished} ago
                        </p>
                    </div>
                </div>  
            </div>
        `;
    });

    document.querySelector('.js-video-grid').innerHTML = videoPreviewGridHTML;
}

renderVideoPreview();