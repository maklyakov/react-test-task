# This is a test for front-end developers

Objective:
----------
Create a front-end CRUD application to manage books on a bookshelf, using this application as the back-end.

The application is deployed, wth the API endpoints ready to access at the following base URL:
https://react-test-globacap.herokuapp.com/

We would especially like to see your approach to coding, use of any stylesheet languages such as Sass or LESS, or anything else you think is relevant.

This test should take around 2 hours.

Application entities:
------------------------------------
- Bookshelves and Books
- A Bookshelf has many Books

API endpoints:
--------------------------
<pre>
<code>
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
</code>
</pre>

Authentication:
---------------
Each of the above API endpoints require a token for authenticating the current user.
That authentication token can be retrieved by calling the /login API endpoint by passing a user/pwd:
<pre>'ReactTestGlobacap'/'ReactTestGlobacap123'</pre>

For example:
https://react-test-globacap.herokuapp.com/login.json?user=ReactTestGlobacap&password=ReactTestGlobacap123
