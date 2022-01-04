@rests.each do |rest|
    json.set! rest.id do
        json.partial! "rest", rest: rest
    end
end