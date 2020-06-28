import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchVideos } from '../../actions/video_actions';
import MovieTypeIndex from './movie_type_index';

const mapStateToProps = state => ({
  videos: Object.values(state.entities.videos)
    .filter(vid => vid.video_type === "movie")
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MovieTypeIndex);