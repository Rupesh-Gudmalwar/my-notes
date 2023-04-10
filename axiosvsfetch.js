/*
1. Axios enjoys built-in XSRF protection.	   Fetch does not.
2. Axios performs automatic transforms of JSON data.	   Fetch is a two-step process when handling JSON data- first, to make the actual request; second, to call the .json() method on the response.
3. Axios allows cancelling request and request timeout.	    Fetch does not.
4. Axios has the ability to intercept HTTP requests.	    Fetch, by default, doesn’t provide a way to intercept requests.
5. Axios has built-in support for download progress.	    Fetch does not support upload progress.
6. Axios has wide browser support.	        Fetch only supports Chrome 42+, Firefox 39+, Edge 14+, and Safari 10.1+ (This is known as Backward Compatibility).
7. Axios “GET” call ignores data content.	Fetch “GET” call can have body content
*/