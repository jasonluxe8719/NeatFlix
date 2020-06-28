json.extract! video, :id, :title, :description, :video_type
json.extract! video.genre, :name
json.clip url_for(video.clip)