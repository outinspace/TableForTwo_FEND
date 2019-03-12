# reservations-application

Before running this project, you must install NodeJS on your machine. Once you have that installed, you can run the following npm commands to do whatever you need.

- Install NodeJS: https://nodejs.org/en/download/current/
- Install Visual Studio Code: https://code.visualstudio.com/download

## Setting up the project
- This needs to be done if any new packages were added to the project by other members
```
npm install
```

### Run the application locally
- To change whether the app uses the backend on the EC2 server or a backend running locally, comment out the appropriate devServer->proxy->target entry in vue.config.js.
```
npm run serve
```

### Deploy to the server
Whenever you push your committed code to gitlab, the project will be compiled and copied over to the EC2 server. This process should take 5 minutes or less. You can check the status in the jobs section of the gitlab repo.

### Pushing your changes to gitlab
- Note: Only push your code to gitlab if it compiles and runs. Otherwise, it will be a headache for others when they pull your incomplete changes.
```
git add .
git commit -m "<INSERT MESSAGE>"
git push
```