class Favorite < ApplicationRecord
    validates :user_id, :rest_id, presence: true

    belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    primary_key: :id,
    foreign_key: :rest_id,
    class_name: :Rest
end
