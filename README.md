# js-sass-grunt-template

This project is a template project to create a basic HTML5/JS/SASS/RequireJS based grunt application.

## Pre-requisites

This project relies on Node, Grunt, Ruby/SASS. Please install them accordingly.

- [Node](https://nodejs.org/)
- [Ruby](https://rubyinstaller.org/) and [SASS](http://sass-lang.com/install)
- Install grunt-cli globally => `npm install -g grunt-cli`
- Clone the repository
- Update the package.json and bower.json to reflect proper meta data (name, author, description, etc.)

## Getting started

- npm install
- bower install

### Installing more packages

#### Front End packages

- Use Bower

#### Development packages

- Use NPM

## Index.html (and other html files)

_index.html_ and other html files should in the `public` folder

## Working with code (files)

- Html > the .html pages are in `public` folder
- SASS > the SASS files are in `resources > scss` folder
- JS > the JS file are in `resources > js` folder
- Most of the working files will be in the `resources` folder
- _note_: These files get copied to the `public/resources` folder when using `grunt`

### Adding more SASS files

Add the main .scss files to the following in Gruntfile.js
`sass > files`

### Adding more JS files

Add the path of the individual js files in Gruntfile.js

- App JS files `copy > scripts`
- 3rd party packages in the second array `copy > vendorScripts`

#### Adding to require js

Then add the appropriate config/require in the app.js file

### After updates

run the following in terminal (or command prompt, etc.)

- grunt

#### After updating only the SASS files

- grunt makecss

#### After updating only the JS files

- grunt makejs

## Running the code

In VS Code, you can start a server using the **Live Server** extension easily.
Or you can browse to the index.html page from any browser.

## Note

_Bootstrap and require.js needed a "Popper.js" file to be present in the root folder, hence the file. (To fix)_
