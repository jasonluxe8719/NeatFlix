import * as VideoApiUtil from '../util/video_api_util';

export const RECEIVE_VIDEOS = 'RECEIVE_VIDEOS';
export const RECEIVE_VIDEO = 'RECEIVE_VIDEO';

export const receiveVideos = videos => ({
  type: RECEIVE_VIDEOS,
  videos
});

export const receiveVideo = video => ({
  type: RECEIVE_VIDEO,
  video
});

export const fetchVideos = () => dispatch => (
  VideoApiUtil.fetchVideos()
    .then(videos => (
      dispatch(receiveVideos(videos))
    ))
);

export const fetchVideo = id => dispatch => (
  VideoApiUtil.fetchVideo(id)
    .then(video => (
      dispatch(receiveVideo(video))
    ))
);
