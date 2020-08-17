import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';



class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  playFeaturedVideo(e) {
    e.currentTarget.muted = false;
    e.currentTarget.play();
  }

  stopFeaturedVideo(e) {
    e.currentTarget.load();
  }
  
  render() {
    if ( !this.props.videos.length) {
      return null;
    }
    // const randomVideo = this.props.videos[Math.floor(Math.random() * this.props.videos.length)];
    return(
    <div className="browse-container">
        <header className="browse-nav-container">
          <nav className="browse-left">
            <Link to="/">
                <img className="nf-logo" src={window.logoURL}/>
            </Link>
            <Link to="/browse">
              <span className="browse-link">Home</span>
            </Link>
            <Link to="/tvshows">
              <span className="browse-link">TV Shows</span>
            </Link>
            <Link to ="/movies">
              <span className="browse-link">Movies</span>
            </Link>
          </nav>

          <nav className="browse-right">
            <Link to="/search">
              <span className="search-button">Search!</span>
            </Link>
            <button className="browse-logout-button" onClick={this.props.logout}>Sign Out</button>
          </nav>
          
        </header>
      <div className="browse-featured-item">
          <video
           src={this.props.videos[Math.floor(Math.random() * this.props.videos.length)].clip} 
           className="featured-video"
           width="100%"
           onMouseOver={this.playFeaturedVideo}
           onMouseOut={this.stopFeaturedVideo}
           muted="muted"
           />
      </div>

      <div className="carousel-container">
        <span className="genre-title">Action</span>
          <section className="videos-container">
                {(this.props.videos.filter(vid => vid.name === "Action")).map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />
                )}
          </section>
      </div>
      <div className="carousel-container">
        <span className="genre-title">Korean</span>
          <section className="videos-container">
                {this.props.videos.filter(vid => vid.name === "Korean").map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />
                )}
          </section>
      </div>
      <div className="carousel-container">
        <span className="genre-title">Comedies</span>
          <section className="videos-container">
                {this.props.videos.filter(vid => vid.name === "Comedy").map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />
                )}
          </section>
      </div>
      <div className="carousel-container">
        <span className="genre-title">Anime</span>
          <section className="videos-container">
                {this.props.videos.filter(vid => vid.name === "Anime").map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />
                )}
          </section>
      </div>
    </div>
    )
  }
};

export default VideoIndex;