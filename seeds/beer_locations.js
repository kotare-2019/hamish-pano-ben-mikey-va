
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('beer_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('beer_locations').insert([
        {name: 'Bay 66', type: 'pub', descript: 'Hive of scum and villany', rating: 1, lat_long_wsg84: '[-41.3195036,174.7943524]', url: 'https://gph.is/2qvUYQk'},
      ])
    })
}

