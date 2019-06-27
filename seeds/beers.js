exports.seed = function (knex, Promise) {
  return knex('beers').del()
    .then(function () {
      return knex('beers').insert([
        { brewery_id: 1, name: 'Double Brown', style: 'beer', abv: 4, decript: 'Slithers deliciously down the throat when drinken via a puncture in the side of the can.', rating: 1, loc_available: '[1]', url: '' },
        { brewery_id: 1, name: 'Flame', style: 'beer', abv: 5, decript: 'One can only feel a sense of achievement for being able to actually drink this. A night on flame is a true badge of bravery as it produces appocalyptic hangovers.', rating: 1, loc_available: '[1]', url: '' },
        { brewery_id: 1, name: 'Victoria Bitter', style: 'beer', abv: 5, decript: 'True hard-man and woman brew, favourite of big Dan types everywhere.', rating: 1, loc_available: '[1]', url: '' },
        { brewery_id: 1, name: 'Export Gold', style: 'beer', abv: 4, decript: 'Almost indescribable, as in no descerning flavour whatsoever. Its like the undercover agent of beers. ', rating: 1, loc_available: '[1]', url: '' },
        { brewery_id: 1, name: 'Ranfurly', style: 'beer', abv: 4, decript: 'The under-appreciated canterbury cousin of speights. Guzzled in large quantities at Lincoln Uni student parties before acts of valor, such as running into fences, and cow tipping. ', rating: 1, loc_available: '[1]', url: '' },
        { brewery_id: 1, name: 'NZ Lager', style: 'beer', abv: 4, decript: 'Excellent when enjoyed in slabs of 18 or 24.', rating: 1, loc_available: '[1]', url: '' },
        { brewery_id: 1, name: 'Rheineck', style: 'beer', abv: 4, decript: 'Cunningly passed off as a german beer, probably to annoy the germans. Brilliant.', rating: 1, loc_available: '[1]', url: '' },
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
