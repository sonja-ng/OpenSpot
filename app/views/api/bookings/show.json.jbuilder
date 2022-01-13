json.partial! "booking", booking: @booking
json.restaurant do
    json.extract! @booking.restaurant, :name, :neighborhood, :cuisine, :id
end