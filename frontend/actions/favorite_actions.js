import * as FavoriteApiUtil from '../util/favorite_api_util';

export const ADD_TO_MYLIST = 'ADD_TO_MYLIST';
export const DELETE_FROM_MYLIST = 'DELETE_FROM_MYLIST';

const receiveMylistVideo = (video, currentUser) => ({
  type: ADD_TO_MYLIST,
  video,
  currentUser
});

const deleteMylistVideo = (videoId, currentUser) => ({
  type: DELETE_FROM_MYLIST,
  videoId,
  currentUser
});

export const addToMylist = (video, currentUser) => (dispatch) => (
  FavoriteApiUtil.addToMylist(video)
  .then(video => dispatch(receiveMylistVideo(video, currentUser)))
);

export const deleteFromMylist = (videoId, currentUser) => (dispatch) => (
  FavoriteApiUtil.deleteFromMylist(videoId)
  .then(() => dispatch(deleteMylistVideo(videoId, currentUser)))
);



