class Api::V1::AppointmentsController < ApplicationController
  def index
    @appointments = Appointment.all
    render json: @appointments
  end

  def create
    if appointment_params[:client_id].present?
      @client = Client.find_by(id: appointment_params[:client_id])
      return render json: { error: "Client not found" }, status: :not_found unless @client

      @appointment = @client.appointments.build(time: appointment_params[:time])
    else
      @appointment = Appointment.new(appointment_params)
    end

    if @appointment.save
      render json: {
        appointment: @appointment,
        client: @appointment.client
      }, status: :created
    else
      render json: { errors: @appointment.errors.full_messages }, status: :unprocessable_entity
    end
  end

  private

  def appointment_params
    params.require(:appointment).permit(:time, :client_id, client_attributes: [ :name, :email, :phone ])
  end
end
