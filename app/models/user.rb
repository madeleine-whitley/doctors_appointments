class User < ApplicationRecord
  validates :first_name, :last_name, presence: true
  has_many :doctors 

  def full_name
    "#{self.first_name} #{self.last_name}"
  end
  
end

