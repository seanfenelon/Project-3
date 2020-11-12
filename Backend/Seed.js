const mongoose = require('mongoose')

const Resorts = require('./models/Resorts')
const User = require('./models/User')

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
            username: 'admin',
            email: 'admin@admin.com',
            password: 'admin',
            passwordConfirmation: 'admin',
            isAdmin: true
          }
        ])
      })

      .then(users => {
        console.log(`${users.length} users have been created`)
        return users
      })

      .then(() => {
        return Resorts.create([

          {
            name: 'Val Thorens',
            country: 'France',
            top_elevation: 3568,
            bottom_elevation: 1650,
            lon: 6.1218,
            lat: 45.0076
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
