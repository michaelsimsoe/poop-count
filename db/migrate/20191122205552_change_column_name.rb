class ChangeColumnName < ActiveRecord::Migration[6.0]
  def change
    rename_column :excreta, :type, :excreta_type
  end
end
