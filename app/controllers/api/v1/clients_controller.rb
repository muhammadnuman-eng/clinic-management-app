class Api::V1::ClientsController < ApplicationController
  def index
    @clients = Client.all
    render json: @clients
  end
end
