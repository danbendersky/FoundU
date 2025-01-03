# FoundU
A lost and found map website designed for college students.

**How to start**
To run the project, first install the required packages
In the directory (make sure package-lock.json is in the same directory), run

    npm install
To test the project locally, run

    npm run dev

**Database Access**
Make sure you have an updated API uri to the mongodb access cluster.
Add a text file called .env to the project folder, and make sure it's added to .gitignore. This way the API key doesn't get leaked to the public github repo (.gitignore files are hidden from the repo during commits).
In the .env file, please insert the following line:

MONGODB_URI = uri;
where uri is replaced with a custom url from tha atlas cluster. 

To get your custom uri, go the cluster, click connect, then drivers, then select mongoose 7.0. Copy the uri, and replace the password field with your account password.
