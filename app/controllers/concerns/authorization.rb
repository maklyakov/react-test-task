module Authorization
  extend ActiveSupport::Concern

  def authorization_token
  "123123123123"
  end

  def authorize_the_api
    if params[:format] == 'json'
      if request.env['HTTP_X_AUTH_TOKEN'].to_s != authorization_token
        render status: 401, json: { message: 'This action must be authorized.'}
        return false
      end
    end

    true
  end
end