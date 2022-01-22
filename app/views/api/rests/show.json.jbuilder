json.partial! "rest", rest: @rest
json.avg_rating @rest.reviews.average(:overall).floor
json.photos @rest.photos do |photo|
    json.filename photo.filename 
    json.url url_for(photo)
end
