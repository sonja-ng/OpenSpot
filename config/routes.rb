Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :update] do
      resources :rests, only: [:create]
    end
    resources :rests, only: [:show, :index]
    resource :session, only: [:create, :destroy]
  end

  root "static_pages#root"
end
