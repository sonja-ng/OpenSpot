class CreateRests < ActiveRecord::Migration[6.1]
  def change
    create_table :rests do |t|
      t.string :name, null: false
      t.string :description, null: false
      t.string :address, null: false
      t.string :city, null: false
      t.string :state, null: false
      t.string :zip, null: false
      t.string :cuisine
      t.string :neighborhood
      t.integer :owner_id, null: false
      t.timestamps
    end
  end
end