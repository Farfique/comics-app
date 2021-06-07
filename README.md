This is a web-app written for a test assignment.
Redesign and implementation of the Comics Web App - https://xkcd.com/
This should be a part of the interface which is directly connected to comics view (title, navigation, comics, date).
Vanilla javascript, css and html.

As a CORS proxy I used https://cors-anywhere.herokuapp.com/corsdemo which requires opt-in, so please before testing this app go there and click button "Request demo access to the temporary server".

What else could be done:
1) Path to /random seems to be prettier than /{id} 
2) Catch all errors if something goes wrong with json object or request.
3) Cross-browser check and use of css preprocessors.
4) Think of better UX for permanent links.

Starting the project (presumed node.js is installed)
    npm install
    npm run build
    node server.js
  
  


