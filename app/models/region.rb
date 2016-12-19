class Region < ApplicationRecord
  belongs_to :continent
  
  has_many :countries, :dependent => :destroy
  accepts_nested_attributes_for :countries, reject_if: :all_blank, allow_destroy: true
end
