# js-sass-grunt-template

This project is a template project to create a basic JS/SASS based grunt application.

## Pre-requisites

This project relies on Node, Grunt, Ruby/SASS. Please install them accordingly.

- [Node](https://nodejs.org/)
- [Ruby](https://rubyinstaller.org/) and [SASS](http://sass-lang.com/install)
- Install grunt-cli globally => `npm install -g grunt-cli`
- Clone the repository
- Update the package.json and bower.json to reflect proper meta data (name, author, description, etc.)

## Installing packages

### Front End packages

- Use Bower

### Development packages

- Use NPM

## Getting started

- npm install
- bower install

## Index.html

_index.html_ is in the **public** folder

## After updates

run the following in terminal (or command prompt, etc.)

- grunt

### After updating only the SASS files

- grunt makecss

## Adding more SASS files

Add the main .scss files to the following in Gruntfile.js
`sass > files >`

## Adding more JS files

Add the path of the individual js files in Gruntfile.js
`copy > scripts > files`

- App js files in the first array
- 3rd party packages in the second array

## Running the code

In VS Code, you can start a server using the **Live Server** extension easily.
Or you can browse to the index.html page from any browser.
