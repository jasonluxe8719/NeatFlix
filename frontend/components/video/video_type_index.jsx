import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
// import ReactPlayer from 'react-player';

class VideoTypeIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = { displayGenres: false };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  showDropdownMenu(e) {
    e.preventDefault();
    this.setState({ displayGenres: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(e) {
    this.setState({ displayGenres: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  render() {
    return (
      <div className="browse-container">
        <header className="browse-nav-container">
          <nav className="browse-left">
            <Link to="/">
              <img className="nf-logo" src={window.logoURL} />
            </Link>
            <Link to="/browse">
              <span className="browse-link">Home</span>
            </Link>
            <Link to="/tvshows">
              <span className="browse-link">TV Shows</span>
            </Link>
            <Link to="/movies">
              <span className="browse-link">Movies</span>
            </Link>
          </nav>

          <nav className="browse-right">
            <button className="browse-logout-button" onClick={this.props.logout}>Sign Out</button>
          </nav>

        </header>
        <br/>

        <div className="genre-selector">
          <p className="video-type-title">{this.props.videoType}</p>
          <div className="dropdown">
            <div className="dropdown-button" onClick={this.showDropdownMenu}>Genres</div>
              {this.state.displayGenres ? (
                <ul className="genres-list">
                  <li className="genre-item">Action</li>
                  <li className="genre-item">K-dramas</li>
                  <li className="genre-item">Comedies</li>
                  <li className="genre-item">Anime</li>
                </ul>
              ) : ( null )}
          </div>
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
        {
          this.props.videos.every(vid => vid.video_type === "tv") ?
            (<div className="carousel-container">
            <span className="genre-title">K-dramas</span>
              <section className="videos-container">
                {this.props.videos.filter(vid => vid.name === "K-dramas").map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />)}
              </section>
            </div>
            ) : ""
        }
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
}

export default VideoTypeIndex;