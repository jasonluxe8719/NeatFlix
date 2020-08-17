class Favorite < ApplicationRecord
  validates :user_id, :video_id, presence: true
  validates :video_id, uniqueness: {scope: :user_id}
  
  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :video,
    primary_key: :id,
    foreign_key: :video_id,
    class_name: :Video
end
