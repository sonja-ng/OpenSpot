class Api::FavoritesController < ApplicationController
    # before_action :ensure_logged_in

    def index
        if user_id 
            favorites = Favorite.where("user_id = ?", user_id)
            favorites.includes(:restaurant)
        end

        @favorites = favorites
        render :index
    end

    def create 
        @favorite = Favorite.new(favorite_params)
        if @favorite.save
            render "api/favorites/show"
        else
            render json: @favorite.errors.full_messages, status: 422
        end
    end

    def show
        @favorite = Favorite.find(params[:id])

        render :show
    end

    def destroy
        @favorite = Favorite.find(params[:id])
        @favorite.destroy
        
        render :show
    end    


    def favorite_params
        params.require(:favorite).permit(:rest_id, :user_id)
    end

    def user_id
        params[:userId]
    end

end