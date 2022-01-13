# == Schema Information
#
# Table name: bookings
#
#  id         :bigint           not null, primary key
#  date       :date             not null
#  time       :time             not null
#  party_size :integer          not null
#  user_id    :integer          not null
#  rest_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Booking < ApplicationRecord
    validates :date, :time, :party_size, :user_id, :rest_id, presence: true

    belongs_to :booker,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

    belongs_to :restaurant,
    primary_key: :id,
    foreign_key: :rest_id,
    class_name: :Rest


end
