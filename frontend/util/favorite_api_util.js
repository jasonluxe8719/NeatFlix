export const getFavorites = () => (
  $.ajax({
    method: 'GET',
    url: "api/favorites"
  })
);

export const createFavorite = (videoId) => (
  $.ajax({
    method: 'POST',
    url: "api/favorites",
    data: { videoId }
  })
);

export const deleteFavorite = (id) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/favorites/${id}`
  })
);