class AddMapColumnToRest < ActiveRecord::Migration[6.1]
  def change
    add_column :rests, :lat, :float
    add_column :rests, :lng, :float
  end
end
