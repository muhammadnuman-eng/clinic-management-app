class Appointment < ApplicationRecord
  belongs_to :client
  accepts_nested_attributes_for :client

  validates :time, presence: true
  validates :client_id, uniqueness: { scope: :time, message: "already has an appointment at this time" }
end
