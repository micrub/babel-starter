
# Usage notes

## `babel-cli` dependency

* [Installation Manual](http://babeljs.io/docs/setup/#installation)

> Note: Since it's generally a bad idea to run Babel globally you may want to
> uninstall the global copy by running `npm uninstall --global babel-cli`.

## Build product

1. Executes tests , if all passing continues to next step.
1. Cleans destination directory from all content.
TODO:
1. builds standalone library based on `src/` directory contents.
1. copies static assets from `src/` and following files:
1.1 `package.json`
1.1 `.gitignore`

### Run **build** script

`npm run build`

Build product is placed into `lib/` directory.

## Publish product

TODO:

1. Enforces version update.
1. Publish to destinations like :
1.1 npm repository
1.1 GITHUB branch/tag for rapid accessibility using github
   repository url as npm dependency tuple value.

### Run **publish** script

`npm run publish`

Publish product version, based on content of `lib/` directory.

# Dependencies

* https://babeljs.io/docs/usage/babel-register/
* https://babeljs.io/docs/plugins/preset-env/
* https://babeljs.io/docs/usage/cli/

