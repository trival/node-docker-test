# Node webapp in docker test

This is a simple nodejs test app that simulates several halt and error scenarios:

* got `localhost:<port>/crash` to exit the app with error code 1
* got `localhost:<port>/halt` to exit the app with error code 0
* got `localhost:<port>/error` to throw an error inside the app
