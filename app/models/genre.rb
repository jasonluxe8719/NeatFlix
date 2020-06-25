class Genre < ApplicationRecord
  validates :name, presence: true, uniqueness: true

  has_many :videos,
    primary_key: :id,
    foreign_key: :genre_id,
    class_name: :Video
end
