import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchVideos, filterbyGenre } from '../../actions/video_actions';
import VideoIndex from './video_index';

const mapStateToProps = state => ({
  videos: Object.values(state.entities.videos)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchVideos: () => dispatch(fetchVideos()),
  filterbyGenre: genreName => dispatch(filterbyGenre(genreName))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
