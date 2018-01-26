json.extract! bookshelf, :id, :title, :created_at, :updated_at
json.url bookshelf_url(bookshelf, format: :json)
