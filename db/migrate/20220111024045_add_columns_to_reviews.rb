class AddColumnsToReviews < ActiveRecord::Migration[6.1]
  def change
    add_column :reviews, :food, :integer, null: false
    add_column :reviews, :service, :integer, null: false
    add_column :reviews, :ambience, :integer, null: false
    remove_column :reviews, :rating
    add_column :reviews, :overall, :integer, null: false
  end
end
