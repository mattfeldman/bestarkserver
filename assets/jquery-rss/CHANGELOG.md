# v3.1.0
## Changed
- Re-added support for SSL

# v3.0.1
## Changed
- Use www.feedrapp.info instead of feedrapp.info

# v3.0.0
## Changed
- Replace Google Feed API with [feedr](https://github.com/sdepold/feedr)

# v2.0.0
## Changed
- moment.js is now optional
- Please note that the format of dates might change when moment.js is available and no `dateFormat` option is specified. In that scenario all dates will be transformed to the format `dddd MMM Do`.

# v1.5.1
- [BUG] Fix moment.js deprecation warning

# v1.5.0
- [FEATURE] Add `onData` callback which gets triggered after receiving the data but before the rendering.

# v1.4.0
- [FEATURE] Pass the feeds meta data to the tokens object.

# v1.3.0
- [BUG] fixed forEach loop. (thanks to aegisrunestone)
- [FEATURE] added error and success callback. (thanks to eliten00b)

# v1.2.0
- [FEATURE] added possibility to define effects for the appearance of entries

# v1.1.0
- [TEST] switched to busterjs for tests
- [TEST] implemented tests for XSS protection
- [FEATURE] XSS protection

# v1.0.0
- [TEST] complete test coverage with mocha

# v0.4.0
- [FEATURE] added possibility to define the output method of google request
- [FEATURE] separated layout template from entry template (thanks to ChaosSteffen)

# v0.3.0
- [IMPROVEMENT] evaluate token map before passing it to custom token functions
- [GENERAL] moved minified version into dist folder (thanks to markrambow)
- [FEATURE] added callback, which is triggered after rendering of all entries (thanks to cm0s)

# v0.2.2
- [BUG] fixed Array#indexOf IE bug

# v0.2.1
- [BUG] catch failures while extracting images

# v0.2.0
- [TOKEN] added index and totalEntries
- [TEST] preparation for jasmine tests

# v0.1.1
- added entry filtering
