# Front-end developer test

Objective:
----------
Create a front-end CRUD application to manage books on a bookshelf, using this application as the back-end.

The application is deployed, the API endpoints ready to access at the following base URL:
https://react-test-globacap.herokuapp.com/

We would especially like to see your approach to coding, use of any stylesheet languages such as Sass or LESS, or anything else you think is relevant.

This test should take around 2 hours.

Send us a link in Github and/or a working deployed version of your front-end application.

Application entities:
------------------------------------
- Bookshelves and Books
- A Bookshelf has many Books

API endpoints:
--------------------------
Note:
All the endpoint follow the restfull route structure:
<pre>
<code>
GET    /books.json - Retrieve all the books.
POST   /books.json - Create a book
GET    /books/:id.json - Retrieve one book based on id.
PATCH  /books/:id.json - Edit a book based on its id.
PUT    /books/:id.json - Edit a book based on its id.
DELETE /books/:id.json - Delete a book based on id.
GET    /bookshelves.json
POST   /bookshelves.json
GET    /bookshelves/:id.json
PATCH  /bookshelves/:id.json
PUT    /bookshelves/:id.json
DELETE /bookshelves/:id.json
GET    /login.json
</code>
</pre>

Fields:
-------
These are the mandatory fields for creating the books:

<pre>
<code>
  string "title"
  string "author"
  string "isbn"
  bigint "bookshelf_id"
</code>
</pre>

These are the mandatory fields for creating the bookshelf:
<pre>
<code>
  string "title"
</code>
</pre>

Example of calls:
-----------------

Login:
<pre>
<code>
curl -X GET 'https://react-test-globacap.herokuapp.com/login.json?user=ReactTestGlobacap&password=ReactTestGlobacap123'
</code>
</pre>

Creating a bookshelf:
<pre>
<code>
curl -X POST --header "Content-Type: application/json" --header "X-Auth-Token: 123123123123" --data-binary "{ \"bookshelf\":{\"title\": \"New Bookshelf\" }}" 'https://react-test-globacap.herokuapp.com/bookshelves.json'
</code>
</pre>

Retrieving all the bookshelves:
<pre>
<code>
curl -X GET --header "Content-Type: application/json" --header "X-Auth-Token: 123123123123" 'https://react-test-globacap.herokuapp.com/bookshelves.json'
</code>
</pre>

Updating a bookshelf based on its id:
<pre>
<code>
curl -X PUT --header "Content-Type: application/json" --header "X-Auth-Token: 123123123123" --data-binary "{ \"bookshelf\":{\"title\": \"Nnew Bookshelff\" }}" 'https://react-test-globacap.herokuapp.com/bookshelves/2.json'
</code>
</pre>

Delete a bookshelf based on its id:
<pre>
<code>
→ curl -X DELETE --header "X-Auth-Token: 123123123123" 'https://react-test-globacap.herokuapp.com/bookshelves/1.json'
</code>
</pre>

Authentication:
---------------
Each of the above API endpoints require a token for authenticating the current user.
That authentication token can be retrieved by calling the /login API endpoint by passing a user/pwd:
<pre>'ReactTestGlobacap'/'ReactTestGlobacap123'</pre>

For example:
https://react-test-globacap.herokuapp.com/login.json?user=ReactTestGlobacap&password=ReactTestGlobacap123
