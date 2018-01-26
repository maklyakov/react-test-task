class LoginController < ApplicationController
  include Authorization

  # GET /bookshelves
  # GET /bookshelves.json
  def login
    if params[:user] == 'ReactTestGlobacap' && params[:password] == 'ReactTestGlobacap123'
      render json: {authorization_token: authorization_token}
    else
	  render status: 401, json: {}
    end
  end
end
