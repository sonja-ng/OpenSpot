json.partial! "rest", rest: @rest
json.reviewIds @rest.reviews.pluck(:id)
json.photos @rest.photos do |photo|
    json.filename photo.filename 
    json.url url_for(photo)
end

# debugger

json.reviews do
    @rest.reviews.includes(:author).each do |review|
        # debugger
        json.set! review.id do
            json.id review.id
            json.comment review.comment
            json.rating review.rating
            json.author_id review.author_id 
            json.rest_id review.rest_id
            json.author review.author.username
        end
    end
end

