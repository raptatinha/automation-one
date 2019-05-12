# automation-one
This repo was created to practice automation.

The goal is to clean up some concepts and good practices.

The course is 'Testing architecture with Protractor'
http://talkingabouttesting.coursify.me/

And this project contains part of the functional tests demonstrated during the classes.


# Technology

The application to be tested runs locally: https://github.com/wlsf82/curso-tat-protractor

This project replicates the functional testing with protractor


# Setup

`npm install`


# Running

You need to start the application mentioned on the 'Technology' session, and run its `drop-db` and `seed-db` command.

- `test:e2e` runs tests on chrome and firefox both headless
- `test:e2e:chrome` runs tests on chrome headless
- `test:e2e:firefox` runs tests on firefox headless