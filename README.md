# fcoo-moment

[FCOO]:https://github.com/FCOO
[i18next]: http://i18next.com/
[Moment.js]: http://http://momentjs.com//
[Moment Timezone]: http://momentjs.com/timezone/
[fcoo-global-events]: https://github.com/FCOO/fcoo-global-events
[fcoo-settings]: https://github.com/FCOO/fcoo-settings
[i18next]: http://i18next.com/
[moment-simple-format]: https://github.com/FCOO/moment-simple-format

## Description

This package is used to create a standard [FCOO] packages for displaying and manipulate dates and time using [Moment.js] and [Moment Timezone].
Using [fcoo-settings] and [fcoo-global-events] to define different settings used to display date and time
Using [i18next] to change language


## Installation
### bower
`bower install https://github.com/FCOO/fcoo-moment.git --save`

## Demo
http://FCOO.github.io/fcoo-moment/demo/ 

## Settings
The following settings can be set using 

    window.fcoo.settings.set( [ID], [VALUE] );

| ID | Values |Description  |
| :--: | :--: | :--- |
| `date` | `"DMY", "MDY", "YMD"` | Format for dates. See [moment-simple-format]   |
| `time` | `"24", "12"` | Format for time. See [moment-simple-format]   |
| `timezone` | See below | Sets the `moment.timezone` and sets the [Modernizr](//modernizr.com/)-test `timezoneutc` using  [modernizr-scss](https://github.com/FCOO/modernizr-scss) => display or hide html-elements with<br> `class="show-for-timezoneutc"` and `class="hide-for-timezoneutc"` |
| `showrelative` | `true, false` | Sets the [Modernizr](//modernizr.com/)-test `showrelative` using  [modernizr-scss](https://github.com/FCOO/modernizr-scss) => display or hide html-elements with<br> `class="show-for-showrelative"` and `class="hide-for-showrelative"`|
| `showutc` | `true, false` | Sets the [Modernizr](//modernizr.com/)-test `showutc` using  [modernizr-scss](https://github.com/FCOO/modernizr-scss) => display or hide html-elements with<br> `class="show-for-showutc"` and `class="hide-for-showutc"`|

### NOTE
To only show a element when the user has selected `showutc` AND the time zone isn't UTC use
    
    <div class="show-for-showutc hide-for-timezoneutc">...</div>

### `datetimeformatchanged`
When any of the above settings are changed the [fcoo-global-events] `datetimeformatchanged` is fired

## Timezone
The following timezones are defined and named

| ID | English name | Danish name  |
| :--: | :--- | :--- |
| `"local"` | Local time | Lokaltid |
| `"utc"`' |  UTC | UTC |
| `"Europe/Copenhagen"` | Europe/Copenhagen | Europa/København |
| `"Europe/London"` | Europe/London | Europa/London |
| `"Atlantic/Faeroe"` | Atlantic/Faeroe Islands | Atlanten/Færøerne |
| `"Atlantic/Reykjavik"` | Atlantic/Reykjavik | Atlanten/Reykjavik |
| `"America/Godthab"` | West Greenland/Nuuk | Vestgrøndland/Nuuk |
| `"America/Scoresbysund"` | East Greenland/Ittoqqortoormiit | Østgrønland/Ittoqqortoormiit |
| `"America/Danmarkshavn"` | East Greenland/Danmarkshavn | Østgrønland/Danmarkshavn |
| `"America/Thule"` |  North Greenland/Thule Air Base | Nordgrønland/Thule Air Base |

## Language
The following language-packages are included
`da` - Danish
`en` - English (default)
`de` - German
`sv` - Swedish
`no` - Norwegian (Using "Bokmål" ~ `nb`)
`fo` - Faroese
`kl` - Kalaallisut/Greenlandic

### NOTE
All but `en` and `kl` are included by adding the files in `overrides.moment.main` in `bower.json`
`kl` are in `/src/kl.js` **BUT IT IS NOT READY** - for now it is only a copy of `da`

When [fcoo-global-events] `languagechanged` is fired 
1. The language are changed using [Moment customization](http://momentjs.com/docs/#/customization/) 
2. The list of available timezones are translated using [i18next]
3. The [fcoo-global-events] `datetimeformatchanged` is fired

## Packages
The following packages are installed

### [Moment Timezone]
Installed with data form 2010-2020


### [moment-simple-format]

### [moment-range](https://github.com/gf3/moment-range)
See documentation [here](http://gf3.github.io/moment-range/DateRange.html)
#### Example
    var start  = new Date(2016, 4, 1);
    var end    = new Date(2016, 4, 23);
    var lol    = new Date(2016, 4, 15);
    var wat    = new Date(2016, 4, 27);
    var range  = moment.range(start, end);
    var range2 = moment.range(lol, wat);

    range.contains(lol); // true
    range.contains(wat); // false

### [moment-round](https://github.com/WebDevTmas/moment-round)
*This is a plugin for moment.js and will round date/time to a given interval.*

#### Example
    var m = new moment(); // 2015-06-18 15:30:19
    moment.round(5, 'seconds'); // 2015-06-18 15:30:20
    moment.ceil(3, 'minutes'); // 2015-06-18 15:33:00
    moment.floor(16, 'hours'); // 2015-06-18 00:00:00
    moment.ceil(21, 'hours'); // 2015-06-18 21:00:00
    moment.ceil(20, 'hours'); // 2015-06-19 00:00:00

### [moment-duration-format](https://github.com/jsmreese/moment-duration-format)

#### Basics
The duration format method can format any moment duration. If no template or other arguments are provided, the default template function will generate a template string based on the duration's value.

    moment.duration(123, "minutes").format(); // "2:03:00"
    moment.duration(123, "months").format(); // "10y 3m"

#### Template
The duration format method may be called with three optional arguments:

    moment.duration.format([template] [, precision] [, settings])

template (string|function) is the string used to create the formatted output, or a function that returns the string to be used as the format template.

    moment.duration(123, "minutes").format("h:mm");// "2:03"
    moment.duration(123, "minutes").format("h [hrs], m [min]"); // "2 hrs, 3 min"



## Copyright and License
This plugin is licensed under the [MIT license](https://github.com/FCOO/fcoo-moment/LICENSE).

Copyright (c) 2016 [FCOO](https://github.com/FCOO)

## Contact information

Niels Holt nho@fcoo.dk
