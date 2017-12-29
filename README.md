# ng-search-app
An interface to facilitate data fetch over HTTP and data filtering using angular-filter

## Instructions - How to use guide
==================

* quick serve-
  * Clone the repository and
  * Run 'php -S localhost:3000 attempt.html' or 'python -m SimpleHTTPServer' and click on attempt.html or 'npm install -g http-server' and hit 'hs' and click attempt.html on your browser.

* simple serve -
  * Clone the repository and
  * Go to dist directory this contains the application build (production)
  * Run 'php -S localhost:3000' or 'python -m SimpleHTTPServer' or 'npm install -g http-server' and hit 'hs'.

* gulp serve
  * Clone the repository and install Nodejs, NPM, Bower and Gulp (if not already).
  * hit 'npm install && bower install && gulp serve' on terminal.
  * gulp will automatically trigger browser and start/load the application in your default browser.
  * Browser sync will help you serve the application on multiple devices simultaneously using external port.

* gulp build
  * Clone the repository and install Nodejs, NPM, Bower and Gulp (if not already).
  * hit 'npm install && bower install && gulp build' on terminal.
  * This will create application build in the dist directory. The same dist directory is the production build which can be dockerized, root-served via a web-server like nginx and put on a CI-CD pipeline for automated deployments. (*I like devops <3)
  * Hit 'cd ./dist' for project root and run index.html on your browser to test the build.
