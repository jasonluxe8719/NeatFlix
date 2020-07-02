

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

export const filterbyGenre = genreName => {
  return $.ajax({
    url: `/api/videos/genre`,
    data: { genreName }
  })
};

export const searchVideos = keyword => {
  return $.ajax({
    url: '/api/videos',
    data: { keyword }
  })
};