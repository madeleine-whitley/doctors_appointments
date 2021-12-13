class CreateDoctors < ActiveRecord::Migration[6.1]
  def change
    create_table :doctors do |t|
      t.string :role
      t.belongs_to :user, null: false, foreign_key: true

      t.timestamps
    end
  end
end
