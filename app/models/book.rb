class Book < ApplicationRecord
  belongs_to :bookshelf

  validates :title, presence: true
  validates :author, presence: true
  validates :isbn, presence: true
end
