Rails.application.routes.draw do
  root 'excreta#index'
  resources :excreta
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
