class SessionsController < Devise::SessionsController
  # protect_from_forgery with: :exception
  skip_before_filter :verify_authenticity_token

  def restore
    if current_user.present?
      render json: current_user
    else
      head 404
    end
  end

private

  def respond_with(resource, opts = {})
    render json: resource # Triggers the appropriate serializer
  end
end
