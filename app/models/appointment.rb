class Appointment < ApplicationRecord
  belongs_to :user
  belongs_to :doctor
  has_many :users, dependent :destroy
  has_many :doctors, dependent :destroy 
  validates :name, presence: true 
end
