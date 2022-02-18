# == Schema Information
#
# Table name: rests
#
#  id           :bigint           not null, primary key
#  name         :string           not null
#  description  :string           not null
#  address      :string           not null
#  city         :string           not null
#  state        :string           not null
#  zip          :string           not null
#  cuisine      :string
#  neighborhood :string
#  owner_id     :integer          not null
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  menu         :text
#  lat          :float
#  lng          :float
#
class Rest < ApplicationRecord
    validates :name, :description, :address, :city, :state, :zip, presence: true
    has_many_attached :photos
    serialize :menu, Hash

    has_many :reviews,
    primary_key: :id,
    foreign_key: :rest_id,
    class_name: :Review

    has_many :reviewers,
    through: :reviews,
    source: :User

    def self.match_search(search)
        self.where("cuisine ILIKE :search OR name ILIKE :search OR neighborhood ILIKE :search", search: "%#{search.titleize}%")
    end
end
