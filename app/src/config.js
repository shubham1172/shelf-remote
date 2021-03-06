/**
 * @author: Shubham Sharma
 * Configuration file
 */

 var config = {}; //configuration data
 //SETUP configuration

 //PORT NUMBER
 config.PORT_NUMBER = 8080;
 //PERMITTED_URLS for auth
 config.PERMITTED_URLS = ["/", "/css/index.css", "/js/shared/signin.js","/register", "/logout", "/login", "/check-eligible",
                          "/get-streams", "/get-colleges", "/check-username", "/logout.html", "/signup.html",
                          "/js/shared/signup.js", "/css/signup.css"];
 //HTTP_CODES used in app
 config.HTTP_CODES = {OK: 200, BAD_REQUEST: 400, FORBIDDEN: 403, SERVER_ERROR: 500};
 //DOMAIN
 config.DOMAIN_MAIN = "https://dysprosium60.hasura-app.io";
 config.DOMAIN_AUTH = "https://auth.dysprosium60.hasura-app.io";
 config.DOMAIN_DATA = "https://data.dysprosium60.hasura-app.io";
 config.DOMAIN_FILE = "https://filestore.dysprosium60.hasura-app.io";
 //AUTH TOKEN
 config.TOKEN = undefined;

 module.exports = config; //export
