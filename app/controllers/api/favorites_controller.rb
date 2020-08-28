class Api::FavoritesController < ApplicationController
  before_action :logged_in?, only: [:index, :create, :destroy]

  def create
    @favorite = Favorite.new(user_id: current_user.id, video_id: params[:videoId])

    if @favorite.save
      render json: {video_id: @favorite[:video_id]}
    else
      render json: {message: "Failed to add this video"}, status: 422
    end
  end

  def index
    @favorites = Favorite.all
  end

  def show
    render :show
  end

  def destroy
    @favorite = current_user.favorites.find_by(video_id: params[:id])

    if @favorite
      @favorite.destroy
      render :show
    else
      render json: {message: "Video does not exist in My List"}, status: 422
    end
  end

  # private

  # def favorite_params
  #   params.require(:favorite).permit(:user_id, :video_id)
  # end
end
