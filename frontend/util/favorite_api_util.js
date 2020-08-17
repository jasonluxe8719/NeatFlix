export const addToMylist = (video) => (
  $.ajax({
    method: 'POST',
    url: `/api/videos/${video.video_id}/favorite`,
    data: { video }
  })
);

export const deleteFromMylist = (videoId) => (
  $.ajax({
    method: 'DELETE',
    url: `/api/videos/${videoId}/favorite`
  })
);