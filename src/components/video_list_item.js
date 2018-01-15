import React from 'react';

const VideoListItem = ({video, onVideoSelect}) => {
    // const video = props.video;
    // const onVideoSelect = props.onVideoSelect;
    const imgURL = video.snippet.thumbnails.default.url;
    console.log('Inside video (video_list_item component):', video)
  return (
    <li onClick={() => onVideoSelect(video)}
    className="list-group-item">
      <div className="video-list media">
        <div className="media-left">
          <img className="media-object" src={imgURL}/>

        </div>

        <div className="media-body">
            <div className="media-heading">
            {video.snippet.title}
            </div>
        </div>
      </div>
    </li>
  );
}

export default VideoListItem;
