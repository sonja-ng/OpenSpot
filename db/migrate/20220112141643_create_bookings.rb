class CreateBookings < ActiveRecord::Migration[6.1]
  def change
    create_table :bookings do |t|
      t.date :date, null: false
      t.time :time, null: false
      t.integer :party_size, null: false
      t.integer :user_id, null: false
      t.integer :rest_id, null: false
      t.timestamps
    end
  end
end
