class AddIndexToVideoType < ActiveRecord::Migration[5.2]
  def change
    add_index :videos, :video_type
  end
end
