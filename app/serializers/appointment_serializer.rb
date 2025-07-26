class AppointmentSerializer < ActiveModel::Serializer
  attributes :id, :time, :client_id
end
