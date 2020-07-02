import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from './video_index_item';
// import ReactPlayer from 'react-player';

class VideoTypeIndex extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      displayGenres: false
    };

    this.showDropdownMenu = this.showDropdownMenu.bind(this);
    this.hideDropdownMenu = this.hideDropdownMenu.bind(this);

    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.props.fetchVideos();
  }

  showDropdownMenu(e) {
    e.preventDefault();
    // e.stopPropagation();
    this.setState({ displayGenres: true }, () => {
      document.addEventListener('click', this.hideDropdownMenu);
    });
  }

  hideDropdownMenu(e) {
    // e.stopPropagation();
    this.setState({ displayGenres: false }, () => {
      document.removeEventListener('click', this.hideDropdownMenu);
    });
  }

  handleClick(e) {
    e.preventDefault();
    // debugger
    this.props.filterbyGenre(e.target.getAttribute("name"));
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
            <Link to="/search">
              <span className="search-button">Search!</span>
            </Link>
            <button className="browse-logout-button" onClick={this.props.logout}>Sign Out</button>
          </nav>

        </header>
        <br/>

        <div className="genre-selector">
          <p className="video-type-title">{this.props.videoType}</p>
          <div className="dropdown">
            <div className="dropdown-button" onClick={this.showDropdownMenu}>Genres</div>
            {this.state.displayGenres ? (
              <ul className="genres-list" onClick={this.handleClick}>
                <li name="Action" className="genre-item">Action</li>
                <li name="Korean" className="genre-item">Korean</li>
                <li name="Comedy" className="genre-item">Comedies</li>
                <li name="Anime" className="genre-item">Anime</li>
              </ul>
            ) : (null)}
          </div>
        </div>
        {
          this.props.videos.some(vid => vid.name === "Action") ? 
          (<div className="carousel-container">
            <span className="genre-title">Action</span>
            <section className="videos-container">
              {(this.props.videos.filter(vid => vid.name === "Action")).map((video) =>
                <VideoIndexItem
                  video={video}
                  key={video.id}
                />
              )}
            </section>
          </div>) : ""
        }
        {
          this.props.videos.some(vid => vid.name === "Korean") ?
            (<div className="carousel-container">
              <span className="genre-title">Korean</span>
              <section className="videos-container">
                {(this.props.videos.filter(vid => vid.name === "Korean")).map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />
                )}
              </section>
            </div>) : ""
        }
        {
          this.props.videos.some(vid => vid.name === "Comedy") ?
            (<div className="carousel-container">
              <span className="genre-title">Comedies</span>
              <section className="videos-container">
                {(this.props.videos.filter(vid => vid.name === "Comedy")).map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />
                )}
              </section>
            </div>) : ""
        }
        {
          this.props.videos.some(vid => vid.name === "Anime") ?
            (<div className="carousel-container">
              <span className="genre-title">Anime</span>
              <section className="videos-container">
                {(this.props.videos.filter(vid => vid.name === "Anime")).map((video) =>
                  <VideoIndexItem
                    video={video}
                    key={video.id}
                  />
                )}
              </section>
            </div>) : ""
        }
    </div>
    )
  }
}

export default VideoTypeIndex;