### Add controller files here for your RESTful API.
When the backend express server is initialized, all controller files in this directory will be aggregated and assigned as endpoints for the server.

To add a new controller, simply add a new `.js` file.  It's exports should follow these rules:
- Needs to be a default export and not a named export.
- Should be an array of endpoint configs relevant to that controller module. Each item in the array should be an object with a `url` `method` and `handler` property:
  ```javascript
  const endpoints = [{
      url: '/some-url-for-backend-data',
      method: 'GET',
      handler: (req, res) => { // <--- Handler signature conforms to express definitions.
          res.send('This is a response from your express server.');
      }
  }];
  
  module.exports = endpoints;
  ```
  
This will allow your client application to send rest requests to query data from the database, or proxy requests to other external services.