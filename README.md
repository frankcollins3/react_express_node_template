# react_express_node_template
react front end (host:3000) linked to express back end (host:5000) return {hey: 'buddy} from server/routes/getData

main-root of project that has access to both directories:
[/client] ->  react front end localhost:3000
[/server] ->  express & node back end localhost:5000

"scripts": {
    "server": "nodemon --quiet server",
    "client": "npm start --prefix client",
    "dev": "concurrently \"npm run server\" \"npm run client\""
  },
* * * * * * * * * end of main-root scripts * * * * * * * * *


/client (react front end) :

 "scripts": {
    "start": "react-scripts start",
    "build": "react-scripts build",
    "test": "react-scripts test",
    "start-dev": "concurrently \"npm run start\" \"cd ../server && nodemon ./bin/www\""
  },
* * * * * * * * * end of client scripts * * * * * * * * *


/server (express back end) : 
"scripts": {
    "start": "concurrently \"npm run server\" \"npm run client\"",
    "server": "nodemon ./bin/www",
    "client": "cd client && npm start"
  },
  * * * * * * * * * end of server scripts * * * * * * * * *
  
  npm i in the client directory and the server directory 
  
  npm run dev from the main-root folder. ls will show scope with access to /client and /server. npm run dev runs both with npm i concurrently.
  
  
  
  
