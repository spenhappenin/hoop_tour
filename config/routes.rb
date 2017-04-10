Rails.application.routes.draw do
  get 'home/index'

  root 'home#index'

  # FOR REACT ROUTER - NO ROUTES BELOW THIS!!!
  get '*unmatched_route', to: 'home#index'
end
