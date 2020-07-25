# NotifyMe

Personal project created to manage the github notifications in a desktop app. Work in progress!

## Idea

Just a way to get a desktop notification when I was assigned a PR. Checking the notifications page of Github is kind of cumbersome sometimes and notifications pile up.

## Arch

- It polls every 5 minutes to the github API to check the notifications. Couldn't find any way to stream with the github's implementation
- Currently just uses an oauth token to auth with the api

## Stack

- Electron
- React + Typescript
  - Using webpack
- [Treat css](https://github.com/seek-oss/treat)

## How to run

Check the makefile to see tha available commands

- `make start-desktop-dev` starts the application in dev mode
- `make start-desktop-mock` starts the application in dev mode but instead of hitting the github api, it uses a mock instance

## To do

- Add a way to change the token in-app
  - Maybe integrate as a github application
- Add testing
- Add the ability to mark as read
- Make the UI nicer :)
- Notifications settings
