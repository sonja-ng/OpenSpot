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
require "test_helper"

class RestTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
