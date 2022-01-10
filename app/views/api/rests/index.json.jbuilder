@rests.each do |rest|
# json.array! @rests do |rest|
    json.set! rest.id do
        json.partial! "rest", rest: rest
        json.reviewIds rest.reviews.pluck(:id)
        json.photos rest.photos do |photo|
            json.filename photo.filename 
            json.url url_for(photo)
        end
    end
end