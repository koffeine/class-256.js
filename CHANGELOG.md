# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).


## [Unreleased]

### Changed

- Use eslint-config-koffeine
- Updated eslint to 5.8.0
- Updated gulp-eslint to 5.0.0
- Updated gulp-umd to 2.0.0
- Updated gulp-rename to 1.4.0
- Updated gulp-mocha to 6.0.0
- Updated gulp-uglify to 3.0.1
- Updated chai to 4.2.0
- Tests now run on the following Node.js versions: 6.x, 8.x and stable
- Updated .gitignore
- Disabled package-lock.json

### Fixed

- Fixed badge link in README.md


## [1.0.13] - 2017-10-10

### Added

- CHANGELOG.md

### Changed

- Dev dependencies
- Updated LICENSE to 2017
- README.md
- Tests now run on the following Node.js versions: 4.x, 6.x, stable


## [1.0.12] - 2016-07-10

### Changed

- README.md
	- **Explicitly state that private properties are static**
- Minor packaging cleanup

### Removed

- Unnecessary build dependencies


## [1.0.11] - 2016-07-04

### Changed

- Dev dependencies
- ESLint configuration
- Code cleanup (by [Ángel Sanz](https://github.com/angelsanz))

### Removed

- Browser tests (by [Ángel Sanz](https://github.com/angelsanz))

### Fixed

- Node.js < 4.x needed to be removed from Travis, because ESLint 3.x doesn't work on those versions


## [1.0.10] - 2016-07-04 [YANKED]


## [1.0.9] - 2016-01-26

### Changed

- Dev dependencies
- README.md
- Updated LICENSE to 2016


## [1.0.8] - 2015-11-24

### Changed

- Dev dependencies


## [1.0.7] - 2015-11-12

### Added

- Node.js 4.2 and io.js 3.3 to Travis test environments

### Changed

- Build script
- Rules for ESLint 1.9.0
- Dev dependencies

### Fixed

- Build issue


## [1.0.6] - 2015-11-06

### Added

- EditorConfig support
- Tests now also run in PhantomJS using Karma

### Changed

- README.md


## [1.0.5] - 2015-11-05

### Added

- More unit tests

### Changed

- Saved 7 bytes
- README.md


## [1.0.4] - 2015-11-05

### Added

- Default name of the extend method can be changed via constant

### Changed

- README.md

### Fixed

- Fixed a bug when no constructor present and the parent's called automatically instead


## [1.0.3] - 2015-11-05

### Added

- Enabled strict mode
- Default name of the constructor method can be changed via constant

### Changed

- README.md


## [1.0.2] - 2015-11-05

### Added

- Unit tests
- Travis integration

### Changed

- README.md


## [1.0.1] - 2015-11-03

### Added

- Initial public release