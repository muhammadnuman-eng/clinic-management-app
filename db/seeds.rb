# This file should ensure the existence of records required to run the application in every environment (production,
# development, test). The code here should be idempotent so that it can be executed at any point in every environment.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Example:
#
#   ["Action", "Comedy", "Drama", "Horror"].each do |genre_name|
#     MovieGenre.find_or_create_by!(name: genre_name)
#   end
client1 = Client.find_or_create_by!(name: "John Doe", email: "john@example.com", phone: "1234567890")
client2 = Client.find_or_create_by!(name: "Jane Smith", email: "jane@example.com", phone: "9876543210")

client1.appointments.create!(time: Time.zone.parse("2025-07-10T10:00:00Z"))
client2.appointments.create!(time: Time.zone.parse("2025-07-11T11:00:00Z"))
