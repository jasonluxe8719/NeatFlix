import React from 'react';

class VideoIndexItem extends React.Component {
  constructor(props) {
    super(props);


    this.handleHover = this.handleHover.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleHover(e) {

    // const myVideo = document.getElementsByClassName('video')[0];
    // debugger
    e.target.muted = false;
    // myVideo.muted = false;
    e.target.play();


  }

  handleHide(e) {
    // const myVideo = document.getElementsByClassName('video')[0];
    // myVideo.pause();
    e.target.load();
  }

  render() {
    const {video} = this.props;
    
    return(
      <div>
        <video
          src={video.clip}
          poster={video.photo}
          className="video"
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHide}
          muted="muted"
          // style={{"height": "200px"}}
        />
      </div>
    )
  }

}

export default VideoIndexItem;