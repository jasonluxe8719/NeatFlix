import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchVideos } from '../../actions/video_actions';
// import { asArray } from '../../reducers/selectors';
import VideoIndex from './video_index';

const mapStateToProps = state => ({
  videos: Object.values(state.entities.videos)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoIndex);
