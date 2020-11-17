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
            image: 'https://i.imgur.com/4f1MbGO.png?1',
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
            image: 'https://i.imgur.com/LumFgEX.jpg',
            user: users[0]
          },
          {
            name: 'Val D-Isere',
            country: 'France',
            top_elevation: 3456,
            bottom_elevation: 1850,
            lon: 6.9802,
            lat: 45.4480,
            image: 'https://i.imgur.com/nNlWf6I.jpg',
            user: users[0]
          },
          {
            name: 'Tignes',
            country: 'France',
            top_elevation: 3450,
            bottom_elevation: 1550,
            lon: 6.9056,
            lat: 45.4683,
            image: 'https://i.imgur.com/iL5OeXI.jpg',
            user: users[0]
          },
          {
            name: 'Morzine',
            country: 'France',
            top_elevation: 2466,
            bottom_elevation: 1000,
            lon: 6.7089,
            lat: 46.1792,
            image: 'https://i.imgur.com/RWPLVVE.jpg',
            user: users[0]
          },
          {
            name: 'Les Deux Alpes',
            country: 'France',
            top_elevation: 3600,
            bottom_elevation: 1350,
            lon: 6.1249,
            lat: 45.0176,
            image: 'https://i.imgur.com/mpkRvho.jpg',
            user: users[0]
          },
          {
            name: 'Les Arcs',
            country: 'France',
            top_elevation: 3226,
            bottom_elevation: 1200,
            lon: 6.8296,
            lat: 45.5722,
            image: 'https://i.imgur.com/ewWY8pB.jpg',
            user: users[0]
          },
          {
            name: 'Avoriaz',
            country: 'France',
            top_elevation: 2277,
            bottom_elevation: 1127,
            lon: 6.7751,
            lat: 46.1921,
            image: 'https://i.imgur.com/6Sv9m4M.jpg',
            user: users[0]
          },
          {
            name: 'Kitzbuhel',
            country: 'Austria',
            top_elevation: 2000,
            bottom_elevation: 800,
            lon: 12.3925,
            lat: 47.4492,
            image: 'https://i.imgur.com/z7TAVEn.jpg',
            user: users[0]
          },
          {
            name: 'St Anton am Arlberg',
            country: 'Austria',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: 10.2682,
            lat: 47.1296,
            image: 'https://i.imgur.com/1rhJJyj.jpg',
            user: users[0]
          },
          {
            name: 'Mammoth Mountain',
            country: 'USA',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: -119.0326,
            lat: 37.6308,
            image: 'https://i.imgur.com/J8fatb3.jpg',
            user: users[0]
          },
          {
            name: 'Whistler',
            country: 'Canada',
            top_elevation: 2284,
            bottom_elevation: 675,
            lon: -122.9574,
            lat: 50.1163,
            image: 'https://i.imgur.com/21oAZwq.jpg',
            user: users[0]
          },
          {
            name: 'The Remarkables',
            country: 'New Zealand',
            top_elevation: 1943,
            bottom_elevation: 1586,
            lon: 168.6616,
            lat: -45.0302,
            image: 'https://i.imgur.com/NC7YM6e.jpg',
            user: users[0]
          },
          {
            name: 'Rusutsu',
            country: 'Japan',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: 140.8969,
            lat: 42.7484,
            image: 'https://i.imgur.com/eGRYAhk.jpg',
            user: users[0]
          },
          {
            name: 'Jackson Hole',
            country: 'USA',
            top_elevation: 3185,
            bottom_elevation: 1924,
            lon: -110.8279,
            lat: 43.5875,
            image: 'https://i.imgur.com/TeiS6Ne.jpg',
            user: users[0]
          },
          {
            name: 'Aspen Snowmass',
            country: 'USA',
            top_elevation: 3813,
            bottom_elevation: 2470,
            lon: -106.9491,
            lat: 39.2084,
            image: 'https://i.imgur.com/2asZ11H.jpg',
            user: users[0]
          },
          {
            name: 'Vail',
            country: 'USA',
            top_elevation: 3527,
            bottom_elevation: 2475,
            lon: -106.3742,
            lat: 39.6403,
            image: 'https://i.imgur.com/z1zcrW5.jpg',
            user: users[0]
          },
          {
            name: 'Alta',
            country: 'USA',
            top_elevation: 3374,
            bottom_elevation: 2600,
            lon: -111.6386,
            lat: 40.5884,
            image: 'https://i.imgur.com/wZAjU5T.jpg',
            user: users[0]
          },
          {
            name: 'Revelstoke',
            country: 'Canada',
            top_elevation: 2225,
            bottom_elevation: 512,
            lon: -118.1957,
            lat: 50.9981,
            image: 'https://i.imgur.com/UVT4qeu.jpg',
            user: users[0]
          },
          {
            name: 'Perisher',
            country: 'Australia',
            top_elevation: 2054,
            bottom_elevation: 1720,
            lon: 148.4094,
            lat: -36.4055,
            image: 'https://i.imgur.com/QsyCGul.jpg',
            user: users[0]
          },
          {
            name: 'Bear Mountain',
            country: 'USA',
            top_elevation: 2684,
            bottom_elevation: 2176,
            lon: -116.8609,
            lat: 34.2277,
            image: 'https://i.imgur.com/oUZvlIW.jpg',
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
