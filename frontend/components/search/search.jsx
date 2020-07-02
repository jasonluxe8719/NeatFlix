import React from 'react';
import { Link } from 'react-router-dom';
import VideoIndexItem from '../video/video_index_item';

class Search extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      keyword: '',
      videos: ''
    }

    this.update = this.update.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  update(field) {
    return e => (
      this.setState({ [field]: e.target.value })
    );
  }

  handleInputChange(e) {
    e.preventDefault();
    this.setState({ videos: this.props.searchVideos(this.state.keyword) });
  }


  render() {
  
    return(
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
        <div className="search-results">
          <form className="search-form" onSubmit={this.handleInputChange} >       
            <input 
              type="text" 
              value={this.state.keyword}
              onChange={this.update('keyword')}
              className="search-input"
              placeholder="Search by title or genre"
            />
          </form>

          <div className="carousel-container">
            <span className="genre-title">Search Results</span>

            {this.state.keyword ? 
              (<section className="videos-container">
                {this.props.videos.map((video) =>
                <VideoIndexItem
                  video={video}
                  key={video.id}
                />
                )}
              </section>) : "" }
          </div>
        </div>


      </div>
    )
  }
}

export default Search;