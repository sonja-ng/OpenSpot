class Api::ReviewsController < ApplicationController
    # before_action :ensure_logged_in

    def index
        # debugger
        if author_id 
            reviews = Review.where("author_id = ?", author_id)
        elsif rest_id
            reviews = Review.where("rest_id = ?", rest_id)
        end

        @reviews = reviews.includes(:author)
        render :index
    end

    def create 
        # debugger
        @review = Review.new(review_params)
        if @review.save
            render "api/reviews/show"
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def update
        @review = Review.find(params[:id])
        if @review.update(review_params)
            render :show
        else
            render json: @review.errors.full_messages, status: 422
        end
    end

    def show
        @review = Review.find(params[:id])

        render :show
    end

    def destroy
        @review = Review.find(params[:id])
        @review.destroy
        
        render :show
    end    

    def review_params
        params.require(:review).permit(:comment, :overall, :food, :ambience, :service, :rest_id, :author_id)
    end

    def author_id
        params[:authorId]
    end

    def rest_id 
        params[:restId]
    end

end