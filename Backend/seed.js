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
            isAdmin: true,
            firstname: 'Top',
            lastname: 'Skier',
            bio: 'This is my bio section. I love to ski and get on it with the lads...',
            favourites: []

          },
          {
            username: 'Test',
            email: 'test@test.com',
            password: 'test',
            passwordConfirmation: 'test',
            image: 'https://i.imgur.com/ioS25on.jpg',
            isAdmin: false,
            firstname: 'Test',
            lastname: 'Snowboader',
            favourites: []

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
            user: users[0],
            description: 'With the access of the Three Valleys, Val Thorens have one of the largest skiing area in the world!',
            skilifts: '137',
            openingtimes: '08:30 - 16:30',
            slopeslength: '600km',
            adultticket: '€64.50,-',
            childticket: '€51.60,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Val D-Isere',
            country: 'France',
            top_elevation: 3456,
            bottom_elevation: 1850,
            lon: 6.9802,
            lat: 45.4480,
            image: 'https://i.imgur.com/nNlWf6I.jpg',
            user: users[0],
            description: 'This world-class resort has earned its reputation as one of France’s top ski destinations. Val d’Isère has something for skiers and boarders of all levels: Olympic and World Cup runs, a wealth of fantastic off-piste opportunities and a varied selection of pistes including greens high up on the mountain.',
            skilifts: '82',
            openingtimes: '09:30 - 16:30',
            slopeslength: '300km',
            adultticket: '€62,-',
            childticket: '€50,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Tignes',
            country: 'France',
            top_elevation: 3450,
            bottom_elevation: 1550,
            lon: 6.9056,
            lat: 45.4683,
            image: 'https://i.imgur.com/iL5OeXI.jpg',
            user: users[0],
            description: 'At Tignes, you can ski before and after everyone else. That’s the motto of this large resort, which offers summer glacier skiing and a winter season stretching from September to May. With 150km of runs and such a long season, Tignes really does have something for everyone, but intermediate and advanced skiers are especially served. Freestylers and riders will also feel at home, since Tignes was one of France’s first resorts to promote alternative ski culture and continues to welcome it with open arms.',
            skilifts: '82',
            openingtimes: '08:30 - 16:30',
            slopeslength: '200km',
            adultticket: '€62,-',
            childticket: '€50,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Morzine',
            country: 'France',
            top_elevation: 2466,
            bottom_elevation: 1000,
            lon: 6.7089,
            lat: 46.1792,
            image: 'https://i.imgur.com/RWPLVVE.jpg',
            user: users[0],
            description: 'Morzine is one of 14 resorts in the massive Portes du Soleil ski area (650km) which straddles the Franco-Swiss border. With 52 hotels and 41 bars and restaurants, it’s a concentration of ski holiday facilities, but still manages to pull off that authentic mountain village feel.',
            skilifts: '137',
            openingtimes: '08:30 - 16:30',
            slopeslength: '600km',
            adultticket: '€64.50',
            childticket: '€51.60',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Les Deux Alpes',
            country: 'France',
            top_elevation: 3600,
            bottom_elevation: 1350,
            lon: 6.1249,
            lat: 45.0176,
            image: 'https://i.imgur.com/mpkRvho.jpg',
            user: users[0],
            description: 'Ballsy, young boarders launch themselves at Les 2 Alpes’ challenging off-piste, world-class snowpark and energetic party scene. That said, Les 2 Alpes has plenty to offer all: The high and varied slopes are largely north-facing, so hold the snow well, and afford excellent views. There is also a snow-sure glacier for all abilities.',
            skilifts: '46',
            openingtimes: '09:17 - 17:00',
            slopeslength: '200km',
            adultticket: '€53,-',
            childticket: '€42.50,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Les Arcs',
            country: 'France',
            top_elevation: 3226,
            bottom_elevation: 1200,
            lon: 6.8296,
            lat: 45.5722,
            image: 'https://i.imgur.com/ewWY8pB.jpg',
            user: users[0],
            description: 'Les Arcs is best for intermediates, experts, freestylers. Highlights: Car-free villages, beautiful views of Mont Blanc, snowsure slopes, varied skiing with lots of long descents, wooded runs, plenty of challenging steeps, a huge amount of off-piste and a leading terrain park with snowboarder-friendly draglift. ',
            skilifts: '47',
            openingtimes: '08:30 - 16:30',
            slopeslength: '200km',
            adultticket: '€55,-',
            childticket: '€44,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Avoriaz',
            country: 'France',
            top_elevation: 2277,
            bottom_elevation: 1127,
            lon: 6.7751,
            lat: 46.1921,
            image: 'https://i.imgur.com/6Sv9m4M.jpg',
            user: users[0],
            description: 'Car-free, sunny village with compact centre, ski-in/ski-out lodgings, shady snowsure slopes, great position on the Portes du Soleil circuit, leading resort for freestylers (five terrain parks and a super-pipe), plenty of good off-piste, access to the legendary Swiss Wall, and a renowned kids club.',
            skilifts: '172',
            openingtimes: '09:00 - 17:00',
            slopeslength: '580km',
            adultticket: '€59,-',
            childticket: '€44,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Kitzbuhel',
            country: 'Austria',
            top_elevation: 2000,
            bottom_elevation: 800,
            lon: 12.3925,
            lat: 47.4492,
            image: 'https://i.imgur.com/z7TAVEn.jpg',
            user: users[0],
            description: 'Kitzbühel is an idyllic alpine village, within easy reach of three airports, boasting reliable snowfall and a variety of ski runs - what more could you want?',
            skilifts: '57',
            openingtimes: '08:30 - 16:30',
            slopeslength: '181km',
            adultticket: '€59.50,-',
            childticket: '€29.50,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'St Anton am Arlberg',
            country: 'Austria',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: 10.2682,
            lat: 47.1296,
            image: 'https://i.imgur.com/1rhJJyj.jpg',
            user: users[0],
            description: 'Skiing here can be challenging, especially in the Galzig area, but your pass gives you access to a substantial 305km of varied terrain in the Ski Arlberg area.',
            skilifts: '88',
            openingtimes: '08:45 - 16:30',
            slopeslength: '303km',
            adultticket: '€59,-',
            childticket: '€35,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Mammoth Mountain',
            country: 'USA',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: -119.0326,
            lat: 37.6308,
            image: 'https://i.imgur.com/J8fatb3.jpg',
            user: users[0],
            description: 'Mammoth Mountain Ski Area boasts the highest elevation, 11,053’, for skiing and snowboarding in the state of California. Located along the eastern edge of California’s Sierra Nevada Mountain Range, Mammoth Mountain is a fan favorite for it’s 3,100 vertical feet of skiing, 3,500 skiable acres, 400” of annual snowfall and an average winter season that lasts from November to June. Mammoth’s accommodations include their Main Lodge, Canyon Lodge and Eagle Lodge, all conveniently located near the mountain, and in addition to their impeccable skiing and snowboarding, the mountain also offers cross-country and snowshoeing terrain, Snowmobile Adventures, and luxurious Snowcat Tours.',
            skilifts: '25',
            openingtimes: '08:30 - 16:00',
            slopeslength: '89.8km',
            adultticket: '$199,-',
            childticket: '$80,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Whistler',
            country: 'Canada',
            top_elevation: 2284,
            bottom_elevation: 675,
            lon: -122.9574,
            lat: 50.1163,
            image: 'https://i.imgur.com/21oAZwq.jpg',
            user: users[0],
            description: 'The ski resort Whistler Blackcomb is located in the Squamish-Lillooet Regional District (Canada, British Columbia, Vancouver, Coast & Mountains). For skiing and snowboarding, there are 200 km of slopes and 50 km of ski routes available. 23 lifts transport the guests. The winter sports area is situated between the elevations of 675 and 2,284 m.',
            skilifts: '23',
            openingtimes: '08:30 - 16:00',
            slopeslength: '200km',
            adultticket: '$64.50,-',
            childticket: '$51.60,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'The Remarkables',
            country: 'New Zealand',
            top_elevation: 1943,
            bottom_elevation: 1586,
            lon: 168.6616,
            lat: -45.0302,
            image: 'https://i.imgur.com/NC7YM6e.jpg',
            user: users[0],
            description: 'Find your freedom at The Remarkables ski resort in Queenstown. Explore the sunny alpine slopes overlooking Queenstown New Zealand.',
            skilifts: '4',
            openingtimes: '09:00 - 16:00',
            slopeslength: '10km',
            adultticket: 'NZ$ 129,-',
            childticket: 'NZ$ 69,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Rusutsu',
            country: 'Japan',
            top_elevation: 2811,
            bottom_elevation: 1304,
            lon: 140.8969,
            lat: 42.7484,
            image: 'https://i.imgur.com/eGRYAhk.jpg',
            user: users[0],
            description: 'The Rusutsu Ski Resort in Hokkaido is absolute heaven for experienced powder hounds or powder hounds on their "L" plates. With an average annual snowfall of 13 metres, the Rusutsu Resort has some of the most incredible powder and tree skiing to be found anywhere in the world. Frequently the powder is incredibly dry; you blast right through it with virtually no resistance. It is an absolute bliss! Rusutsu Hokkaido is great for a day trip from Niseko to experience some Japow nirvana, but it’s even better if you book a multi-day stay at Rusutsu.',
            skilifts: '18',
            openingtimes: '09:00 - 20:00',
            slopeslength: '42km',
            adultticket: '¥ 6200',
            childticket: '¥ 3200',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Jackson Hole',
            country: 'USA',
            top_elevation: 3185,
            bottom_elevation: 1924,
            lon: -110.8279,
            lat: 43.5875,
            image: 'https://i.imgur.com/TeiS6Ne.jpg',
            user: users[0],
            description: 'Jackson Hole Mountain Resort is a North American ski resort on steroids. Jackson Hole Wyoming is an exceptional ski resort due to the snow, the amazing steep and challenging terrain, the backcountry, the village, and the lift infrastructure. It’s so easy to see why so many people flock there to live and call themselves “a local”! Jackson Hole Ski Resort is so perfect that the Powderhounds would consider it to be the best US ski resort, however…and it’s a big however…. everyone knows how fabulous it is and it’s become completely over-run. On a powder day, the Jackson Hole Ski Resort can be feral, the lift lines ridiculously long, fresh powder gone in-bounds within half an hour (and gone within an hour in the sidecountry), and good luck if you need to drive or get a bus from the town of Jackson. Yet if it’s not a powder day mid-week, all the locals don’t bother turning up, and it’s a fairly peaceful ski resort. Weekends can be a different matter when lots of Ikon Pass holders arrive en masse.',
            skilifts: '13',
            openingtimes: '09:00 - 16:00',
            slopeslength: '116km',
            adultticket: 'US$ 175,-',
            childticket: 'US$ 105,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Aspen Snowmass',
            country: 'USA',
            top_elevation: 3813,
            bottom_elevation: 2470,
            lon: -106.9491,
            lat: 39.2084,
            image: 'https://i.imgur.com/2asZ11H.jpg',
            user: users[0],
            description: 'Snowmass Ski Area is massive enough to offer up every type of terrain from serene to extreme. 21 lifts deliver you to more than 3300 acres with 94 trails.',
            skilifts: '16',
            openingtimes: '08:30 - 15:30',
            slopeslength: '237km',
            adultticket: 'US$ 184',
            childticket: 'US$ 126',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Vail',
            country: 'USA',
            top_elevation: 3527,
            bottom_elevation: 2475,
            lon: -106.3742,
            lat: 39.6403,
            image: 'https://i.imgur.com/z1zcrW5.jpg',
            user: users[0],
            description: 'The Vail ski resort is one of the most famous ski resorts in the USA. It lies in the middle of the Rocky Mountains. The modern elegance and the timeless style of the holiday village is intertwined with the lifestyle of the former West.',
            skilifts: '25',
            openingtimes: '08:30 - 16:00',
            slopeslength: '234km',
            userRating: 0,
            numOfRatings: 0,
            adultticket: 'US$ 219,-',
            childticket: 'US$ 151,-'
          },
          {
            name: 'Alta',
            country: 'USA',
            top_elevation: 3374,
            bottom_elevation: 2600,
            lon: -111.6386,
            lat: 40.5884,
            image: 'https://i.imgur.com/wZAjU5T.jpg',
            user: users[0],
            description: 'Alta is one of the oldest ski resorts in the US (it opened in 1939) and it retains some of its old-fashioned traditions, the most obvious being the prohibition of snowboarders. Despite significant protests and threatened legal action from some snowboarders, the tradition of skiing remains and only those with two sticks are allowed.',
            skilifts: '8',
            openingtimes: '09:15 - 16:30',
            slopeslength: '116km',
            userRating: 0,
            numOfRatings: 0,
            adultticket: 'US$ 125,-',
            childticket: 'US$ 65,-'
          },
          {
            name: 'Revelstoke',
            country: 'Canada',
            top_elevation: 2225,
            bottom_elevation: 512,
            lon: -118.1957,
            lat: 50.9981,
            image: 'https://i.imgur.com/UVT4qeu.jpg',
            user: users[0],
            description: 'Get revved up and get stoked at Revelstoke Mountain Resort! Corny catch phrases aside, Revelstoke ski resort is continuing to transform itself into becoming one of the biggest and best resorts in Canada. Revelstoke Canada has long been known by cat skiers and heli skiers for the legendary Selkirk powder that falls in abundance. Realising the potential for the perfect location where snow dumps, Revelstoke Mountain Resort opened in the season of 2007-08 and development continues to turn this powder paradise into a mega-resort.',
            skilifts: '5',
            openingtimes: '08:30 - 15:30',
            slopeslength: '55km',
            adultticket: 'C$ 129,-',
            childticket: 'C$ 46,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Perisher',
            country: 'Australia',
            top_elevation: 2054,
            bottom_elevation: 1720,
            lon: 148.4094,
            lat: -36.4055,
            image: 'https://i.imgur.com/QsyCGul.jpg',
            user: users[0],
            description: 'Perisher NSW is a leading Australian ski resort with plenty of bells and whistles. By Australian standards, Perisher Ski Resort is mega, with the largest skiable terrain and the greatest numbers of lifts in Australia as well as the Southern hemisphere. Perisher (known as Perisher Blue prior to 2009) became so big through the amalgamation of the inter-connected ski areas and villages of Perisher Valley, Smiggin Holes, Blue Cow and Guthega.',
            skilifts: '41',
            openingtimes: '08:30 - 17:00',
            slopeslength: '100km',
            adultticket: 'AU$ 64.50,-',
            childticket: 'AU$ 51.60,-',
            userRating: 0,
            numOfRatings: 0
          },
          {
            name: 'Bear Mountain',
            country: 'USA',
            top_elevation: 2684,
            bottom_elevation: 2176,
            lon: -116.8609,
            lat: 34.2277,
            image: 'https://i.imgur.com/oUZvlIW.jpg',
            user: users[0],
            description: 'Located in Southern California’s San Bernardino Mountains, Bear Mountain offers a 200-acre winter playground for skiers and snowboarders. Along with Snow Summit, Bear Mountain makes up the Big Bear Mountain Resort. With 85% of Bear Mountain covered by over 200 freestyle features, the mountain features over 165 beginner to advanced rails, boxes, walls and other features and 4 pipes (8 foot, 13 foot, 18 foot and a Jib Pipe) that include Southern California’s only Superpipe, along with Bear Mountain’s Skill Builder Parks geared toward freestyle skiers with beginner skills.',
            skilifts: '9',
            openingtimes: '08:30 - 16:30',
            slopeslength: '27.2km',
            adultticket: '$94.50',
            childticket: '$71.60',
            userRating: 0,
            numOfRatings: 0
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
