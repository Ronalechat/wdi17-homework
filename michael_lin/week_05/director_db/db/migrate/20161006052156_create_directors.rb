class CreateDirectors < ActiveRecord::Migration
  def change
    create_table :directors do |t|
      t.text :name
      t.date :dob
      t.text :nationality
      t.text :image
      t.timestamps
    end
  end
end
