class Continent < ApplicationRecord
  has_many :regions, :dependent => :destroy
  has_many :countries, through: :regions, :dependent => :destroy
  has_many :states, through: :countries, :dependent => :destroy
  has_many :counties, through: :states, :dependent => :destroy

  validates_presence_of :name
  
  accepts_nested_attributes_for :regions, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :countries, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :states, reject_if: :all_blank, allow_destroy: true
  accepts_nested_attributes_for :counties, reject_if: :all_blank, allow_destroy: true
end
