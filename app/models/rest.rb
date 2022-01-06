class Rest < ApplicationRecord
    validates :name, :description, :address, :city, :state, :zip, presence: true
    has_many_attached :photos

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

    
    def self.match_cuisine(cuisine)
        self.where("cuisine = ?", cuisine)
    end

    def self.match_neighborhood(neighborhood)
        self.where("neighborhood = ?", neighborhood)
    end
end
