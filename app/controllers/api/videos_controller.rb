class Api::VideosController < ApplicationController
  def show
    @video = Video.find(params[:id])
    render "api/videos/show"
  end

  def index
    videos = Video.all

    if params[:keyword]
      @videos = []
      videos.each do |video|
        genre = Genre.find_by(id: video.genre_id)
        if video.title.downcase.include?(params[:keyword].downcase) || genre.name.downcase.include?(params[:keyword].downcase) 
          @videos << video
        end
      end
    else
      @videos = Video.all
    end
    
    render "api/videos/index"
  end

  def genre
    genre_id = Genre.find_by(name: params[:genreName]).id
    @videos = Video.where(genre_id: genre_id)
    render "api/videos/index"
  end

end
