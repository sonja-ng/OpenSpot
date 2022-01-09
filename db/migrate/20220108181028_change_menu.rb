class ChangeMenu < ActiveRecord::Migration[6.1]
  def change
    remove_column :rests, :menu
    add_column :rests, :menu, :text
  end
end
