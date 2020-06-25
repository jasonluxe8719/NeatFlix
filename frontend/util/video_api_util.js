

export const fetchVideos = () => {
  return $.ajax({
    url: '/api/videos',
    error: err => console.log(err)
  })
};

export const fetchVideo = id => {
  return $.ajax({
    url: `/api/videos/${id}`,
  })
};

