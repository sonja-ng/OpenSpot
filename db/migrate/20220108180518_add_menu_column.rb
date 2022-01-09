class AddMenuColumn < ActiveRecord::Migration[6.1]
  def change
    add_column :rests, :menu, :string
  end
end
