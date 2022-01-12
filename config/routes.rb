Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update]
    resources :rests, only: [:show, :index]
    resources :bookings, only: [:create, :index, :show, :update, :destroy]
    resources :reviews, only: [:create, :index, :show, :update, :destroy]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
