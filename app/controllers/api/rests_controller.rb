class Api::RestsController < ApplicationController
    def index
        # debugger
        if cuisine
            @rests = Rest.match_cuisine(cuisine)
            render :index
        elsif neighborhood
            @rests = Rest.match_neighborhood(neighborhood)
            render :index
        elsif name
            @rests = Rest.match_name(name)
            render :index
        else 
            @rests = Rest.all
            render :index
        end

        # @rests = rests

        # render :index
    end

    def show
        @rest = Rest.find(params[:id])
        render :show
    end

    def create
        @rest = Rest.new(rest_params)
        @rest.owner = User.first

        if @rest.save
            render :show
        else
            render json: @rest.errors.full_messages, status: 422
        end
    end

    def rest_params
        params.require(:rest).permit(:name, :description, :address, :city, :state, :zip, :cuisine, :neighborhood, :owner_id)
    end

    def cuisine
        params[:cuisine]
    end

    def neighborhood
        params[:neighborhood]
    end

    def name
        params[:name]
    end

    def general
        params[:general]
    end

end