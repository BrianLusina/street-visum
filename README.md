# StreetView

[![Build Status](https://travis-ci.org/BrianLusina/street-visum.svg?branch=master)](https://travis-ci.org/BrianLusina/street-visum)
[![tested with jest](https://img.shields.io/badge/tested_with-jest-99424f.svg)](https://github.com/facebook/jest)
[![codecov](https://codecov.io/gh/BrianLusina/street-visum/branch/master/graph/badge.svg)](https://codecov.io/gh/BrianLusina/street-visum)

Basic and simple StreetView with questionnaire form in ReactJS

## Getting Started

Simply clone the project:

```bash
git clone https://github.com/BrianLusina/street-visum.git
```

## Prerequisites

You will need a couple of things to get started.

1. Ensure you have [npm](https://www.npmjs.com/) already installed on your local dev machine. Follow [these](https://www.npmjs.com/get-npm?utm_source=house&utm_medium=homepage&utm_campaign=free%20orgs&utm_term=Install%20npm) instructions to get you started

2. You will need a Google Maps API Key. You can get one from [here](https://developers.google.com/maps/documentation/javascript/get-api-key)

3. Create a `.env` file at the root of the project and insert the following:

```plain
REACT_APP_GOOGLE_MAPS_API_KEY=<YOUR_GOOGLE_MAPS_API_KEY>
```
> Insert your Google Maps API Key from step 2

Once you have all these setup, then you can install dependencies you need:

```bash
npm install
# if using yarn
yarn install
```

## Running tests

Tests can be run as below:

```bash
yarn test
# or
npm test
```

## Deployment

Deployment will be done on Github Pages, but an alternative can be used.
To make a deployment on successful build on CI, simply change the `homepage` key on the package.json file to the link that will be hosted by Github Pages. Ensure you have a gh-pages branch on your repo.

You will also need a Github Token that you will set on the Travis CI dashboard.

Alternatively. You can deploy it from your local dev machine with:

```bash
npm run predeploy
npm run deploy
# using yarn
yarn predeploy
yarn deploy
```
> These assume that you already have the gh-pages branch on your repo.

## Built With

+ [ReactJS](https://reactjs.org/)


[![forthebadge](http://forthebadge.com/images/badges/uses-js.svg)](http://forthebadge.com)
