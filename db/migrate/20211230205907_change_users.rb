class ChangeUsers < ActiveRecord::Migration[6.1]
  def change
    remove_column :users, :first_name
    remove_column :users, :last_name
    remove_column :users, :display_name
    remove_column :users, :phone_number
    add_column :users, :username, :string, null: false
    add_index :users, :username, unique: true
  end
end
