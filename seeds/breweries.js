
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('breweries').del()
    .then(function () {
      // Inserts seed entries
      return knex('breweries').insert([
        {name: 'DB Breweries', city: 'Auckland', country: 'New Zealand', url: 'https://i.kinja-img.com/gawker-media/image/upload/s--vYB6eQoY--/c_scale,f_auto,fl_progressive,q_80,w_800/gxigrvesqk2vpwmg6ihj.jpg', lat_long_wsg84: '[-40.65685775,173.55675315]' },
      ]);
    });
};
