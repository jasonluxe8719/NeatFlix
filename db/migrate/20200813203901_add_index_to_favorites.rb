class AddIndexToFavorites < ActiveRecord::Migration[5.2]
  def change
    add_index :favorites, :user_id
    add_index :favorites, :video_id
  end
end
