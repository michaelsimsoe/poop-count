class CreateExcreta < ActiveRecord::Migration[6.0]
  def change
    create_table :excreta do |t|
      t.string :type

      t.timestamps
    end
  end
end
