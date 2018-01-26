Rails.application.routes.draw do
  resources :books
  resources :bookshelves
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: "bookshelves#index"
  get "/login", to: "login#login", as: "login"
end
