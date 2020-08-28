@favorites.each do |fav|
  json.set! fav.id do
    json.partial! 'api/favorites/favorite', favorite: fav
  end
end