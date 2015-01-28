class CreateCharacters < ActiveRecord::Migration
  def change
    create_table :characters do |t|
      t.string :image
      t.string :description
      t.string :name
      t.string :super_power

      t.timestamps null: false
    end
  end
end
