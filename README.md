# boilerSass
A simple SASS / CSS boilerplate<br>

Based on HTML5 Boilerplate, boilerSASS is an elementary SASS boilerplate for easy webproject setup.

## Basic Style and More
**boilerSASS** provides a common style for all commons html elements such as: html, body, h*, p, a, ul, ol, img, span, small, form, input, select, textarea and much more.
You can setup any custom fonts or colors you need and use many useful mixins that make your work faster.

**boilerSASS** is a Grunt ready project, so Grunt is required and you can discover more about it from [https://gruntjs.com](https://gruntjs.com).

**boilerSASS** is a simple SASS Boilerplate useful to start a complete new web project in less than 10 minutes

## Warning
From version **2.0.0** all external libs and packages was removed and project is heavy changed.<br>
**POSTCSS** are now included to the project, so, for this reason, some mixins was removed or changed.

* * *


### Usage
*   **Download BoileSASS**
    Download BoilerSASS project from [https://github.com/Gix075/boilerSass/releases](https://github.com/Gix075/boilerSass/releases) then extract `dist/boilerSASS_[version]` where you need.
    The `boilerSASS_[version]` dir will be the main directory for your new project and can be renamed as you need.
    **Warning:** for new projects you must use only the files in `dist/boilerSASS_[version]`. The `src` must be used only for BoilerSASS developement

*   **Install NPM components**
    Open the package.json file and edit the values for _name_ and _version_, then
    open you system console and access `boilerSASS_[version]` directory on your desktop then type `$ npm install`

*   **Using SASS**
    Once BoilerSASS is installed you can start coding Sass
    Type `$ Grunt` on your console to first BoilerSASS compile and to start the _watch_ task that autocomile SASS files when changed and POSTCSS fix your css with all required prefixes.

*   Customize your `dist/package.json` and `dist/Gruntfile.js` as you need!


* * *


### History

#### version 3.0.0
* New sass math usage
* New flex grid

#### version 2.3.0
* New mixins and classes added
* Normalize.css updated to version 8.0.1
* _grid.scss partials renamed in _columns.scss
* Code cleaning
* Old deprecated mixins removed

#### version 2.2.3
* Bug fixed in flex grid

#### version 2.2.2
* Bug fixed for sr_only mixin
* Bug fixed in placeholder mixin

#### version 2.2.1
* Bug fixed in button mixin
* Bug fixed in margins and paddings utility classes

#### version 2.2.0
* Some sass code changed
* Variables changed
* Grid file added
* Flex file renamed

#### version 2.1.0
* New responsive style added for Headlines
* New responsive font sizes mixin added for Headlines
* Very simple form style added
* Some bug fixed for forms style

#### version 2.0.0
* Romoved all external libs and packages.
* Only normalize.css is included
* **POSTCSS** added to the project

#### version 1.8.1
* Bug on body padding and margin solved

#### version 1.8.0
* Typography style updated
* New typography helper classes added
* New transition easings mixins added
* New Demo file added (uncompleted)
* Bootstrap updated to version 4 stable

#### version 1.7.5
* Bug fixed on src/partials/_variables.scss

#### version 1.7.4
* Bug fixed on src/partials/_typography.scss
* Some changes to src/package.json
* Documentation updated

#### version 1.7.3
* Some Bug Fixed
* HTML5 Boilerplate project icons replaced
* New Ditribution Package added: boilerSass_1.7.3.zip
* Repository structute completely changed

#### version 1.7.2
* HTML5 Boilerplate manually updated to v6.0.1 and removed from NPM control

#### version 1.7.1
* Font Weight helper classes and variables added to _typography.scss and _variables.scss

#### version 1.7.0
* AnimateCSS added to the project
* Installation bug fixed

#### version 1.6.0
* Mixins added
* CSS Style fixed

#### version 1.5.2
* Dynamical installation process fixed

#### version 1.5.1
* MaterialDesign Icons added
* Elegant Icons added

#### version 1.5.0
* Dynamical installation process added
* Normalize.css
* Bootstrap 4 added
* FontAwesome added

#### version 1.4.0
* New mixins added

#### version 1.3.0
* New variables added

#### version 1.2.0
* New variables added

#### version 1.0.0
* First porting of **boilerLESS**

_**boilerSASS** is the SASS version of the previous https://github.com/Gix075/boilerLess_
