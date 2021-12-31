class Api::SessionsController < ApplicationController
    def create 
        @user = User.find_by_credentials(
            params[:user][:username],
            params[:user][:password]
        )

        if @user
            login!(@user)
            render "api/users/show"
        else
            render json: ["Invalid username or password"], status: 401
        end
    end

    def destroy
        if !logged_in? 
            render json: ['Must be signed in first'], status: 404
        else
            logout
            render json: ['You have logged out!']
        end
    end    


end