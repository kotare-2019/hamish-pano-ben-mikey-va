exports.seed = function (knex, Promise) {
  return knex('beers').del()
    .then(function () {
      return knex('beers').insert([
        { brewery_id: 1, name: 'Double Brown', style: 'beer', abv: 4, descript: 'Slithers deliciously down the throat when drinken via a puncture in the side of the can - refered to as a shotgun or torpedo. Go for the 440ml can for a double barrel shotgun. Almost indistinguisable from Tui, but without the stigma of the sexist yeah right adverts. ', rating: 1, loc_available: '[1]', url: 'images/DoubleBrown.jpeg' },
        { brewery_id: 1, name: 'Flame', style: 'beer', abv: 5.2, descript: 'One can only feel a sense of achievement for being able to actually drink this without dying. A night on flame is a true badge of bravery as it produces appocalyptic hangovers. DB refers to the process by which Flame is brewed as extreme brewing, which may be the secret to its potent hangover. Typically served in a garage from a box beside a gas heater.', rating: 1, loc_available: '[1]', url: 'images/Flame.jpeg' },
        { brewery_id: 4, name: 'Victoria Bitter', style: 'beer', abv: 4.9, descript: 'True hard-man and woman brew, favourite of big Dan types everywhere. Fosters, the makers of the beer, refer to it as the drinking beer, which is just as well as if this beer can drink itself, no one else will have too. ', rating: 1, loc_available: '[1]', url: 'images/VictoriaBitter.jpeg' },
        { brewery_id: 1, name: 'Export Gold', style: 'beer', abv: 4.6, descript: 'Almost indescribable, as in no descerning flavour whatsoever. DB have managed to create a beer that has absolutely no personality, and that in that goal they have succeded like no one else in history. Its like the undercover agent of beers. ', rating: 1, loc_available: '[1]', url: 'images/ExportGold.jpeg' },
        { brewery_id: 2, name: 'Ranfurly', style: 'beer', abv: 4, descript: 'The under-appreciated canterbury cousin of speights. Drunk in vigourous quantities at Lincoln Uni student parties before acts of valor, such as running into fences, cow tipping, and running into cows. The lords of Valhalla would approve.', rating: 1, loc_available: '[1]', url: 'images/Ranfurly.jpeg' },
        { brewery_id: 2, name: 'NZ Lager', style: 'beer', abv: 5, descript: 'This is a beer of true self reflection. Whenever someone drinks this, they must ask themselves, "How did this happen?" "What went wrong?" "Im not even drinking Tui?" Excellent when enjoyed in slabs of 18 or 24. Memorable for all the wrong reasons. ', rating: 1, loc_available: '[1]', url: 'images/NZLager.jpeg' },
        { brewery_id: 3, name: 'Rheineck', style: 'beer', abv: 3.5, descript: 'Brewed in NZ, but cunningly passed off as a german beer probably to annoy german tourists(though the city of Rheineck is in Switzerland). In terms of flavour, opinions are split. Witty commentators have stated "I will give it a 3 for appearance because, well, it looks like a beer. Apart from that if a frog, a goat and a monkey vomited into a cup I would rather drink that than Rheineck." Most would say at 3.5%ABV whats the point?', rating: 1, loc_available: '[1]', url: 'images/Rheineck.jpeg' },
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
