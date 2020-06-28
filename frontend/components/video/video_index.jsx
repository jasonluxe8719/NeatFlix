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
            <span className="browse-logo">NEATFLIX</span>
          </Link>
          <Link to="/browse">
            <span className="browse-home">Home</span>
          </Link>
          <Link to="/tvshows">
            <span className="browse-tv">TV Shows</span>
          </Link>
          <Link to ="/movies">
            <span className="browse-movies">Movies</span>
          </Link>
        </nav>

        <nav className="browse-right">
          <button className="browse-logout-button" onClick={this.props.logout}>Sign Out</button>
        </nav>
        
      </header>
      <br/>
      <span className="browse-title">Action</span>
      <div className="carousel-action">
          <section className="browse-action-1" id="action1">
              <ul className="action-vid">
                {(this.props.videos.filter(vid => vid.name === "Action")).slice(0, 2).map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />
                )}
              </ul>
          </section>
          <section className="browse-action-2" id="action2">
            <ul className="action-vid">
              {(this.props.videos.filter(vid => vid.name === "Action")).slice(2).map((video) =>
                <VideoIndexItem
                  video={video}
                  key={video.id}
                />
              )}
            </ul>
          </section>
      </div>
      <section className="browse-kdramas">
        <span className="browse-title">K-Dramas</span>
          <ul>
            {this.props.videos.filter(vid => vid.name === "K-dramas").map((video) =>
              <VideoIndexItem
                video={video}
                key={video.id}
              />
            )}
          </ul>
      </section>
      <section className="browse-comedy">
          <span className="browse-title">Comedies</span>
          <ul>
            {this.props.videos.filter(vid => vid.name === "Comedy").map((video) =>
              <VideoIndexItem
                video={video}
                key={video.id}
              />
            )}
          </ul>
      </section>
      <section className="browse-anime">
          <span className="browse-title">Anime</span>
          <ul>
            {this.props.videos.filter(vid => vid.name === "Anime").map((video) =>
              <VideoIndexItem
                video={video}
                key={video.id}
              />
            )}
          </ul>
      </section>
    </div>
    )
  }
};

export default VideoIndex;