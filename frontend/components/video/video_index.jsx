import React from 'react';
import ReactPlayer from 'react-player';

class VideoIndex extends React.Component {

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return(
    <div>
      <nav className="logout">
        <button className="logout-button" onClick={this.props.logout}>Sign Out</button>
      </nav>
      <br/>
      {this.props.videos.map(video => <ReactPlayer url = {video.clip} playing />)}
    </div>
    )
  }
};

export default VideoIndex;