import React from 'react';
import VideoList from '../containers/VideoListContainer.js';
import VideoPlayer from '../containers/VideoPlayerContainer.js';
import Search from '../containers/SearchContainer.js';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 col-md-offset-3">
            <Search />
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer/>
          </div>
          <div className="col-md-5">
            <VideoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
