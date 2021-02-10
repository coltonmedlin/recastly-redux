import searchYouTube from '../lib/searchYouTube.js';
import changeVideoList from './videoList.js';
import changeVideo from './currentVideo.js';
import YOUTUBE_API_KEY from '../config/youtube.js';


var handleVideoSearch = (q) => {

  const worker = (dispatch) => {
    searchYouTube({key: YOUTUBE_API_KEY, query: q, max: 5}, (videos) => {
      console.log('handlevideosearch', videos);
      dispatch(changeVideoList(videos));
      dispatch(changeVideo(videos[0]));
    });
  };

  return worker;
};

export default handleVideoSearch;

