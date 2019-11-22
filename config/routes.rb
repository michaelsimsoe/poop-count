Rails.application.routes.draw do
  root 'excreta#index'
  resources :excreta
  get '/service-worker.js' => "service_worker#service_worker"
  get '/manifest.json' => "service_worker#manifest"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end
