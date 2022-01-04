class Rest < ApplicationRecord
    validates :name, :description, :address, :city, :state, :zip, presence: true
    has_many_attached :photos

    belongs_to :owner,
        primary_key: :id,
        foreign_key: :owner_id,
        class_name: :User

end
