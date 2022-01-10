class CreateReviews < ActiveRecord::Migration[6.1]
  def change
    create_table :reviews do |t|
      t.string :comment, null: false
      t.integer :rating, null: false
      t.integer :author_id, null: false
      t.integer :rest_id, null: false
      t.timestamps
    end
  end
end
