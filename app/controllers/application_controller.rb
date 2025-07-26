class ApplicationController < ActionController::API
  before_action :authenticate_api_key!

  private

  def authenticate_api_key!
    api_key = request.headers["X-API-KEY"]
    puts "api key is #{api_key}"
    unless api_key && api_key == ENV["CLINIC_API_KEY"]
    render json: { error: "Unauthorized" }, status: :unauthorized
    end
  end
end
