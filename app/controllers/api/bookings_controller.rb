class Api::BookingsController < ApplicationController
    # before_action :ensure_logged_in

    def index
        if user_id 
            bookings = Booking.where("user_id = ?", user_id)
        else
            bookings = Booking.all
        end

        @bookings = bookings.includes(:restaurant)
        render :index
    end

    def create 
        @booking = Booking.new(booking_params)
        if @booking.save
            render "api/bookings/show"
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def update
        @booking = Booking.find(params[:id])
        if @booking.update(booking_params)
            render :show
        else
            render json: @booking.errors.full_messages, status: 422
        end
    end

    def show
        @booking = Booking.find(params[:id])

        render :show
    end

    def destroy
        @booking = Booking.find(params[:id])
        @booking.destroy
        
        render :show
    end    


    def booking_params
        params.require(:booking).permit(:date, :time, :party_size, :rest_id, :user_id)
    end

    def user_id
        params[:userId]
    end

end