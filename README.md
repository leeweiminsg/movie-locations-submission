# Movie Locations Assignment

## Introduction

I have selected problem 1:

*Many travellers are often interested in visiting famous spots where movies were shot. Build a web app that helps them find out shooting locations of their favorite movies.*

You can check out the web app [here](https://movielocations-take-home.appspot.com/)!

## Requirements

### Populating Data

I used the [data source](https://data.sfgov.org/Culture-and-Recreation/Film-Locations-in-San-Francisco/yitu-d5am) provided.

I downloaded the data as csv, before using [Pandas](https://pandas.pydata.org/) to transform the data for import into firestore.

The whole process was done using Python.

## Searching for Movie Locations

1) Enter movie name into search bar. The search bar has autocomplete to display available options.

2) Click on the movie name

3) A list of locations will be displayed underneath the search bar. Click on the view button to display the location in google map!

4) You can click on the red marker in the map to display more information

## Built With

[Google Cloud App Engine](https://cloud.google.com/appengine)

[Cloud Firestore](https://firebase.google.com/products/firestore/)

[Google Maps Platform](https://cloud.google.com/maps-platform)

- [Google Maps Javascript API](https://developers.google.com/maps/documentation/javascript/tutorial)

- [Google Maps Geocoding API](https://developers.google.com/maps/documentation/geocoding/start)

[Create React App](https://github.com/facebook/create-react-app)

[Material UI](https://material-ui.com/)

## Installation

### 1) Clone Repository

I would recommend using [github desktop](https://desktop.github.com/) to do so!

Using command line:

`git clone https://github.com/leeweiminsg/movie-locations-submission.git`

### 2) Install NPM packages

```
cd movielocations
npm install
```

## Setup

I have provided the API keys in the .env file for convenience.

For manual setup, you can follow the steps below:

### 1) Firebase

[Guide](https://firebase.google.com/docs/firestore/quickstart)

### 2) Google Maps API

[Guide](https://developers.google.com/maps/gmp-get-started)

Set the api keys in the .env file (located at movielocations directory). Remember to include in gitignore!

## Development

From movielocations directory:

```
npm run start
```

You can access the app at http://localhost:3000/.

## Deployment

### Google Cloud App Engine

- Create GCP account and set up project

- Install [Cloud SDK](https://cloud.google.com/sdk/docs/)

- From movielocations directory:
  
  ```gcloud app deploy```

## Migrating Data

From migration directory:

[Activate virtualenv](https://programwithus.com/learn-to-code/Pip-and-virtualenv-on-Windows/)

Then run:

```python migrate.py```