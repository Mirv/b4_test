class Continent < ApplicationRecord
  has_many :regions, :dependent => :destroy
  accepts_nested_attributes_for :regions, reject_if: :all_blank, allow_destroy: true
end
