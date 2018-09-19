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

## Index.html (and other html files)

_index.html_ and other html files is in the **public** folder

## Working with code (files)

- Html > the .html pages are in **public** folder
- SASS > the SASS files are in **resources > scss** folder
- JS > the JS file are in **resources > js** folder
- Most of the working files will be in the **resources** folder
- _note_: These files get copied to the **public** folder when using `grunt`

### Adding more SASS files

Add the main .scss files to the following in Gruntfile.js
`sass > files >`

### Adding more JS files

Add the path of the individual js files in Gruntfile.js
`copy > scripts > files`

- App js files in the first array
- 3rd party packages in the second array

### After updates

run the following in terminal (or command prompt, etc.)

- grunt

#### After updating only the SASS files

- grunt makecss

### Running the code

In VS Code, you can start a server using the **Live Server** extension easily.
Or you can browse to the index.html page from any browser.
