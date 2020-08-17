class Api::FavoritesController < ApplicationController
  before_action :logged_in?, only: [:index, :create, :destroy]

  def create
    favorite = Favorite.new(user_id: current_user.id, video_id: params[:video][:id])

    if favorite.save

      @mylist = favorite
      render '/api/favorites/index'
    else
      render json: ['Video could not be found'], status: 404
    end
  end

  def index
    @mylist = current_user.mylist
  end

  def destroy
    @mylist = Favorite.find_by(user_id: current_user.id, video_id: params[:video_id])
    @mylist.destroy
  end

  # private

  # def favorite_params
  #   params.require(:favorite).permit(:user_id, :video_id)
  # end
end
