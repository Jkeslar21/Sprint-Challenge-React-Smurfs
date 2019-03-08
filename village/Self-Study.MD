Explain the differences between client-side routing and server-side routing.
With server-side routing, we request information from a server and in return receive the requested document.  This only will load the content requested on that specific page, and if another page is navigated to,  the server will send a new document with that newly requested page's information.  This can become inefficient when the same navigation bar must keep re-loading and refreshing every time a new page is requested.  With client-side routing, routing is handled internally by the JavaScript that is already on the page.  With client-side routing, the entire application is loaded upon the first request to visit that page/application.  This may be slower initially when compared to server-side routing, but its essentially because we have chosen to load everything upon the initial visit.  In doing so, we now have the ability to visit any page/link/navlink without having to wait for a page refresh or re-render!  This is extremely attractive behavior in terms of performance and efficiency.

Which HTTP methods can be mapped to the CRUD acronym that we use when interfacing with APIs/Servers.
The POST method is the "C" in CRUD which stands for Create.
The GET method is the "R" in CRUD which stands for Read.
The PUT method is the "U" in CRUD which stands for Update.
The DELETE method is the "D" in CRUD which stands for Delete.

Mention three tools we can use to make AJAX requests.
Three tools we can use to make AJAX requests consist of: 
axios, Fetch, and XMLHttpRequest.