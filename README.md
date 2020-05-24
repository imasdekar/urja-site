This is the readme for URJA Trust website.

To view the website in local machine:
- Start a hugo server with the following command,
  `hugo serve -D`
  -D(optional): to serve draft Pages
- View the website at http://localhost:1313/

For enabling local CMS:
- Start the website local server as mentioned above.
- In a new terminal start the netlify server with the following comand,
  `npx netlify-cms-proxy-server`
- View the CMS at http://localhost:1313/admin 
