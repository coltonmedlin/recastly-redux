import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {
  return {
    type: 'HANDLE_VIDEO_SEARCH',
    value: q
  };
};

export default handleVideoSearch;
