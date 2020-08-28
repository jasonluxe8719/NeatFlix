import * as FavoriteApiUtil from '../util/favorite_api_util';

export const GET_MYLIST = 'GET_MYLIST';
export const CREATE_MYLIST = 'CREATE_MYLIST';
export const DELETE_MYLIST = 'DELETE_MYLIST';

const getMylist = videos => {
  return {
    type: GET_MYLIST,
    videos
  }
};

const createMylist = videoId => {
  return {
    type: CREATE_MYLIST,
    videoId
  }
};

const deleteMylist = videoId => {
  return {
    type: DELETE_MYLIST,
    videoId
  }
}

export const getFavorites = (videos) => (dispatch) => (
  FavoriteApiUtil.getFavorites(videos)
  .then((videos) => dispatch(getMylist(videos)))
);

export const createFavorite = (videoId) => (dispatch) => (
  FavoriteApiUtil.createFavorite(videoId)
  .then((vid) => dispatch(createMylist(vid)))
);

export const deleteFavorite = (id) => (dispatch) => (
  FavoriteApiUtil.deleteFavorite(id)
  .then((videoId) => dispatch(deleteMylist(videoId)))
);



