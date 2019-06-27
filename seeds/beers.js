exports.seed = function (knex, Promise) {
  return knex('beers').del()
    .then(function () {
      return knex('beers').insert([
        { name: 'Ambitious Aardvark', email: 'aardvark@example.org' },
        { name: 'Bamboozled Baboon', email: 'baboon@example.org' },
        { name: 'Curious Capybara', email: 'capybara@example.org' },
        { name: 'Dilapidated Duck', email: 'duck@example.org' },
        { name: 'Exuberant Elephant', email: 'elephant@example.org' },
        { name: 'Fascinated Flying Fox', email: 'flying.fox@example.org' },
        { name: 'Generous Gila Monster', email: 'gila.monster@example.org' },
      ])
    })
}

// import seeder from 'knex-csv-seeder';


// exports.seed = seeder({
//   table: 'beers',
//   file: '../data/openbeerdb_csv/beers.csv',
//   recordsPerQuery: 100,
//   encoding: 'utf8',
//   parser: {
//     delimiter: ',',
//     quote: '"',
//     escape: '\\'
//   }
// });