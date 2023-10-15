check the packages first
npm i --legacy-peer-deps ->to install the packages of the version present in the code
mongodb compass is used
connect to a cluster and then create collection and browse in that compass

now come to index.js file 
import express and cors and add that connection link in different file (db->config.js) as we don't want to push it on github
import that config and app = express();
now we have 2 things - first is user and otheri s product and we will create schema for both in db (db->Product.js for product schema and User.js for user schema ...check these files)
now import them too in index.js 
now app.use(express.json())- This line sets up middleware to parse incoming JSON data in requests. When a client sends data to your Express server with a Content-Type of application/json, this middleware will parse the JSON data and app.use(cors()) - Enable cors for all the routes
