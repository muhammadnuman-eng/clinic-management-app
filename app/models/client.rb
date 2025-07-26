class Client < ApplicationRecord
  has_many :appointments, dependent: :destroy


  validates :email, presence: true, uniqueness: true
  validates :phone, presence: true, uniqueness: true
  validates :name, presence: true
end
