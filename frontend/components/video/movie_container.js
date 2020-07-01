import { connect } from 'react-redux';

import { logout } from '../../actions/session_actions';
import { fetchVideos } from '../../actions/video_actions';
import VideoTypeIndex from './video_type_index';

const mapStateToProps = state => ({
  videos: Object.values(state.entities.videos)
    .filter(vid => vid.video_type === "movie"),
  videoType: 'Movies'
});

const mapDispatchToProps = dispatch => ({
  logout: () => dispatch(logout()),
  fetchVideos: () => dispatch(fetchVideos())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VideoTypeIndex);