# A RoR application for testing the React candidates.

The application serves two entities:
------------------------------------
-Bookshelves and Books.
-A bookshelf has many books.

It has these API endpoint:
--------------------------
GET    /books(.:format)
POST   /books(.:format)
GET    /books/new(.:format)
GET    /books/:id/edit(.:format)
GET    /books/:id(.:format)
PATCH  /books/:id(.:format)
PUT    /books/:id(.:format)
DELETE /books/:id(.:format)
GET    /bookshelves(.:format)
POST   /bookshelves(.:format)
GET    /bookshelves/new(.:format)
GET    /bookshelves/:id/edit(.:format)
GET    /bookshelves/:id(.:format)
PATCH  /bookshelves/:id(.:format)
PUT    /bookshelves/:id(.:format)
DELETE /bookshelves/:id(.:format)
GET    /login(.:format)

Each of the above API endpoints require a token for authenticating the current user.
That authentication token can be retrieved by calling the /login API endpoint by passing a user/pwd:
'ReactTestGlobacap'/'ReactTestGlobacap123'
