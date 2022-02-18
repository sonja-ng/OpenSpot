class Api::RestsController < ApplicationController
    def index
        if search
            rests = Rest.match_search(search)
        else 
            rests = Rest.all
        end

        @rests = rests.includes(:reviews)
        render :index
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

    def search
        params[:search]
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