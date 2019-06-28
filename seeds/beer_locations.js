
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('beer_locations').del()
    .then(function () {
      // Inserts seed entries
      return knex('beer_locations').insert([
        { name: 'Bay 66', type: 'pub', descript: 'Hive of scum and villany', rating: 1, lat_long_wsg84: '[-41.3195036,174.7943524]', url: 'https://gph.is/2qvUYQk' },
        { name: 'The Corner Bar & Cafe', type: 'pub', descript: 'A bit fighty', rating: 1, lat_long_wsg84: '[-41.3178658,174.7949271]', url: 'https://gph.is/24fY7Tz' },
        { name: 'Basement', type: 'backpackers pub', descript: 'Do not leave your drink alone!', rating: 1, lat_long_wsg84: '[-41.2946789,174.7809055]', url: 'https://www.nzherald.co.nz/resizer/0SMMeMxi-SJ2YkyVcsf83musyBA=/620x349/smart/filters:quality(70)/arc-anglerfish-syd-prod-nzme.s3.amazonaws.com/public/H4YQKFQJ7ZCFLGUPYALV2MTYFE.jpg' },
        { name: 'Danger Danger', type: 'club, i suppose', descript: 'If you can legally drink you are too old to be here', rating: 1, lat_long_wsg84: '[-41.292446,174.7770459]', url: 'https://fastly.4sqi.net/img/general/600x600/54979238_CpzO_2vtoJO9OUmrcEK5wi9XS0Q-UXxsmsPhfBPxZwE.jpg' },
        { name: 'TJ Hackets', type: 'Irish Pub', descript: 'very cranky, old men drink and rant', rating: 1, lat_long_wsg84: '[-41.2924808,174.7762048]', url: 'https://gph.is/2cOUSi4' },
      ])
    })
}

