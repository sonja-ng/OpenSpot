json.partial! "favorite", favorite: @favorite
json.restaurant do
    json.extract! @favorite.restaurant, :id, :name, :neighborhood, :cuisine
end