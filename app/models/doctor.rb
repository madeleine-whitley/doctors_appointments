class Doctor < ApplicationRecord
  belongs_to :user
  has_many :through
  validates :name, presence: true
end
