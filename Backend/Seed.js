const { LoaderOptionsPlugin } = require("webpack");

const Resorts = require('./Models/Resorts')

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