import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
// import ReactPlayer from 'react-player';

class VideoIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }
  
  render() {
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
          <button className="browse-logout-button" onClick={this.props.logout}>Sign Out</button>
        </nav>
        
      </header>
      <br/>

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
        <span className="genre-title">K-Dramas</span>
          <section className="videos-container">
                {this.props.videos.filter(vid => vid.name === "K-dramas").map((video) =>
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