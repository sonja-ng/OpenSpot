# == Schema Information
#
# Table name: reviews
#
#  id         :bigint           not null, primary key
#  comment    :string           not null
#  author_id  :integer          not null
#  rest_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  food       :integer          not null
#  service    :integer          not null
#  ambience   :integer          not null
#  overall    :integer          not null
#
class Review < ApplicationRecord
    validates :comment, :overall, :food, :service, :ambience, presence: true

    belongs_to :author,
        primary_key: :id,
        foreign_key: :author_id,
        class_name: :User

    belongs_to :restaurant,
        primary_key: :id,
        foreign_key: :rest_id,
        class_name: :Rest

end
