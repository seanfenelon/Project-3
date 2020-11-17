const mongoose = require('mongoose')

const Resorts = require('./models/resorts')
const User = require('./models/users')

const axios = require('axios')

mongoose.connect(

  'mongodb://localhost/resortsdb',
  { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true },
  (err) => {

    if (err) return console.log(err)

    console.log('Mongoose connected!')
    mongoose.connection.db.dropDatabase()

      .then(() => {
        return User.create([
          {
            username: 'Admin',
            email: 'admin@admin.com',
            password: 'admin',
            passwordConfirmation: 'admin',
            image: 'https://i.imgur.com/c8iaGOf.jpg',
            isAdmin: true
          },
          {
            username: 'Test',
            email: 'test@test.com',
            password: 'test',
            passwordConfirmation: 'test',
            image: 'https://i.imgur.com/ioS25on.jpg',
            isAdmin: false
          }
        ])
      })

      .then(users => {
        console.log(`${users.length} users have been created`)
        return users
      })
//hmm
      .then((users) => {
        return Resorts.create([

          {
            name: 'Val Thorens',
            country: 'France',
            top_elevation: 3568,
            bottom_elevation: 1650,
            lon: 6.58000,
            lat: 45.29806,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Val D-Isere',
            country: 'France',
            top_elevation: 3456,
            bottom_elevation: 1850,
            lon: 6.9802,
            lat: 45.4480,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Tignes',
            country: 'France',
            top_elevation: 3450,
            bottom_elevation: 1550,
            lon: 6.9056,
            lat: 45.4683,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Morzine',
            country: 'France',
            top_elevation: 2466,
            bottom_elevation: 1000,
            lon: 6.7089,
            lat: 46.1792,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Les Deux Alpes',
            country: 'France',
            top_elevation: 3600,
            bottom_elevation: 1350,
            lon: 6.1249,
            lat: 45.0176,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Les Arcs',
            country: 'France',
            top_elevation: 3226,
            bottom_elevation: 1200,
            lon: 6.8296,
            lat: 45.5722,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Avoriaz',
            country: 'France',
            top_elevation: 2277,
            bottom_elevation: 1127,
            lon: 6.7751,
            lat: 46.1921,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Kitzbuhel',
            country: 'Austria',
            top_elevation: 2000,
            bottom_elevation: 800,
            lon: 12.3925,
            lat: 47.4492,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'St Anton am Arlberg',
            country: 'Austria',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: 10.2682,
            lat: 47.1296,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Mammoth Mountain',
            country: 'USA',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: -119.0326,
            lat: 37.6308,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Whistler',
            country: 'Canada',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: -122.9574,
            lat: 50.1163,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Queenstown',
            country: 'New Zealand',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: 168.6616,
            lat: -45.0302,
            image: 'www.test.url',
            user: users[0]
          },
          {
            name: 'Rusutsu',
            country: 'Japan',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: 140.8969,
            lat: 42.7484,
            image: 'www.test.url',
            user: users[0]
          }

          

        ])
      })

      .then(resorts => {
        console.log(`${resorts.length} resorts have been created.`)
        return resorts
      })

      .catch(err => {
        console.log(err)
      })

      .finally(() => {

        mongoose.connection.close()

      })
  }
)
