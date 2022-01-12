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

    
    def self.match_cuisine(cuisine)
        # formatted = self.format_input(cuisine)
        self.where("cuisine ILIKE ?", cuisine)
    end

    def self.match_name(name)
        # formatted = self.format_input(name)
        self.where("name ILIKE ?", name)
    end

    # def self.format_input(input)
    #     arr = input.split(" ")
    #     if arr.length > 1
    #         new_input = arr.map{|word| word.capitalize}
    #         return new_input.join(" ")
    #     elsif input == "noho" || input == "Noho"
    #         return "NoHo"
    #     else
    #         return input.capitalize
    #     end 
    # end

    def self.match_neighborhood(neighborhood)
        # formatted = self.format_input(neighborhood)
        self.where("neighborhood ILIKE ?", neighborhood)
    end
end
