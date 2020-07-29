import React from 'react';

class VideoFeaturedItem extends React.Component {
  constructor(props) {
    super(props);


    this.handleHover = this.handleHover.bind(this);
    this.handleHide = this.handleHide.bind(this);
  }

  handleHover(e) {
    e.target.muted = false;
    e.target.play();
  }
  

  handleHide(e) {
    e.target.pause();
  }

  render() {
    const { featured } = this.props;

    return (
      <div>
        <video
          src={featured.clip}
          poster={featured.photo}
          className="featured-video"
          onMouseOver={this.handleHover}
          onMouseOut={this.handleHide}
          muted="muted"
        />
      </div>
    )
  }

  

}

export default VideoFeaturedItem;