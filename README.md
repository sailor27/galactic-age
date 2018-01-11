# Galactic Age Calculator
Sailor Winkelman
01/9/18


The Galactic Age Calculator lets the user enter their birthday and see their age in solar years on different planets in the galaxy. It also returns information about their predicted life expectancy.

## Setup/Installation

* Visit [this page](https://sailor27.github.io/galactic-age/)
 on github

* Clone repository
* Run $npm install in terminal
* Run $bower install in terminal
* Run $npm init in terminal
* Run $bower init in terminal
* Run $gulp build in terminal
* Run $gulp serve in terminal

### Planning and Specs

Passing Specs:

Page will return user's age on earth using their birthdate.
* Input: Birthdate as Month, Day, Year, Hour. ("1990", "05", "27", "18", "00", "00")
* Output: User's age in years (~27.5)

Page will calculate the user's life expectancy using their age and regional average.
* Input: User's Birthdate, Country where user lives. (1, 78.24)
* Output: Life expectancy in years. (77.24)

Page will return user's age in seconds.
* Input: User's age in years (1)
* Output: User's age in seconds (31556952)

Page will return user's age on Mercury using their age.
* Input: (~27.5)
* Output: (~115)

Page will return user's age on Venus using their age.
* Input: (~27.5)
* Output: (~44.5)

Page will return user's age on Mars using their age.
* Input: (~27.5)
* Output: (~14.6)

Page will return user's age on Jupiter using their age.
* Input: (~27.5)
* Output: (~2)

Future Enhancement Planning:

* Page will include images of planets
* Page will include custom CSS styles
* Page will transition between planets using CSS animations
* Page will round numbers to user-friendly number of decimal places
* Page will be responsive at mobile, tablet and desktop screen sizes
* Page will include more options for region


### Technologies Used

The following tools were used to create this project:

```
[ node.js ](https://nodejs.org/en/docs/) : package management and installation
```

```
[bower](https://bower.io/docs/api/) : front end package management and installation
```

```
[gulp](https://gulpjs.com/) : automating development environment workflow (build, serve, lint)
```

```
[karma](https://karma-runner.github.io/2.0/index.html) : unit testing
```

```
[moment](https://momentjs.com/) : date and time formatting
```

```
[bootstrap](https://momentjs.com/) : basic styling
```

* HTML
* CSS
* Javascript (ES6)
* JQuery


## Author

 **Sailor Winkelman**

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Thanks Tyler, Instructor at Epicodus
* Shout out to [Luke Bertram](https://github.com/lukebertram) for this [Resource](https://github.com/lukebertram/js-boilerplate/blob/master/JS_PROJECT_SETUP.md) for working with gulp and node.js
