import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
// import ReactPlayer from 'react-player';

class MovieTypeIndex extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  render() {
    return (
      <div className="browse-container">
        <header className="browse-nav-container">
          <nav>
            <Link to="/">
              <img src={window.logoURL} />
            </Link>
            <Link to="/browse">
              <span className="browse-home">Home</span>
            </Link>
            <Link to="/tvshows">
              <span className="browse-tv">TV Shows</span>
            </Link>
            <Link to="/movies">
              <span className="browse-movies">Movies</span>
            </Link>
          </nav>

          <nav className="browse-right">
            <button className="browse-logout-button" onClick={this.props.logout}>Sign Out</button>
          </nav>

        </header>
        <br/>
        <section className="browse-video-type">
          <ul>
            {this.props.videos.map((video) =>
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
}

export default MovieTypeIndex;