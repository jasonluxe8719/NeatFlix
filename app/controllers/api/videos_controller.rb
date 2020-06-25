class Api::VideosController < ApplicationController
  def show
    @video = Video.find(params[:id])
    render "api/videos/show"
  end

  def index
    @videos = Video.all
    render "api/videos/index"
  end
end
