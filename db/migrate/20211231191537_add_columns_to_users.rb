class AddColumnsToUsers < ActiveRecord::Migration[6.1]
  def change
    add_column :users, :fname, :string, null: false
    add_column :users, :lname, :string, null: false
    add_column :users, :phone, :string, null: false
  end
end
