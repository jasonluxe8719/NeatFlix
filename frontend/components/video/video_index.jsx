import React from 'react';
// import ReactPlayer from 'react-player';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);

    this.handleHover = this.handleHover.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  handleHover(idx, e) {
    const myVideo = document.getElementsByClassName('video')[0];
    debugger
    myVideo.muted = false;
    myVideo.play();


  }

  handleHide(idx, e) {
    const myVideo = document.getElementsByClassName('video')[0];
    myVideo.pause();
  }
  

  render() {
    return(
    <div>
      <nav className="logout">
        <button className="logout-button" onClick={this.props.logout}>Sign Out</button>
      </nav>
      <br/>
      <section>
        {this.props.videos.map((video) => 
        <video src={video.clip}
          className="video"
          preload="false"
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHide}
          muted="muted"
        />)}
      </section>
    </div>
    )
  }
};

export default VideoIndex;