@bookings.each do |booking|
    json.set! booking.id do
        json.partial! "booking", booking: booking
        json.restaurant do
            json.extract! booking.restaurant, :name, :neighborhood, :cuisine
        end
    end
end