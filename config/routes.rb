Rails.application.routes.draw do
  root 'users#index'

  resources :users do
  resources :doctors
end

  resources :doctors do
    resources :appointments 
  end
end
