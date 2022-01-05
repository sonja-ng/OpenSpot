json.partial! "rest", rest: @rest
json.photos @rest.photos do |photo|
    json.filename photo.filename 
    json.url url_for(photo)
end