class Video < ApplicationRecord
  validates :title, :description, presence: true

  belongs_to :genre,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :genre
    
  has_one_attached :video
end
