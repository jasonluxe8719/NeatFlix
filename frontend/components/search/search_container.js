import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchVideos, searchVideos } from '../../actions/video_actions';
import Search from './search';

const mapStateToProps = state => ({
  videos: Object.values(state.entities.videos)
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchVideos: () => dispatch(fetchVideos()),
  searchVideos: keyword => dispatch(searchVideos(keyword))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Search);