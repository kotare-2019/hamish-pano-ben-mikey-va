exports.seed = function (knex, Promise) {
  return knex('beers').del()
    .then(function () {
      return knex('beers').insert([
        { brewery_id: 1, name: 'Double Brown', cat_id: 1, style_id: 1, abv: 4, decript: 'Slithers down the throat when drinken via a puncture in the side of the can', rating: 1 },
        { brewery_id: 1, name: 'Flame', cat_id: 1, style_id: 1, abv: 4, decript: 'Slithers down the throat when drinken via a puncture in the side of the can', rating: 1 },
        { brewery_id: 1, name: 'Victoria Bitter', cat_id: 1, style_id: 1, abv: 4, decript: 'Slithers down the throat when drinken via a puncture in the side of the can', rating: 1 },
        { brewery_id: 1, name: 'Export Gold', cat_id: 1, style_id: 1, abv: 4, decript: 'Slithers down the throat when drinken via a puncture in the side of the can', rating: 1 },
        { brewery_id: 1, name: 'NZ Lager', cat_id: 1, style_id: 1, abv: 4, decript: 'Slithers down the throat when drinken via a puncture in the side of the can', rating: 1 },
        { brewery_id: 1, name: 'Rheineck', cat_id: 1, style_id: 1, abv: 4, decript: 'Slithers down the throat when drinken via a puncture in the side of the can', rating: 1 },
        { brewery_id: 1, name: 'Ranfurly', cat_id: 1, style_id: 1, abv: 4, decript: 'Slithers down the throat when drinken via a puncture in the side of the can', rating: 1 },
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