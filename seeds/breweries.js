
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('breweries').del()
    .then(function () {
      // Inserts seed entries
      return knex('breweries').insert([
        { name: 'DB Breweries', city: 'Auckland', country: 'New Zealand', url: 'https://i.kinja-img.com/gawker-media/image/upload/s--vYB6eQoY--/c_scale,f_auto,fl_progressive,q_80,w_800/gxigrvesqk2vpwmg6ihj.jpg', lat_long_wsg84: '[-40.65685775,173.55675315]' },
        { name: 'Independent Breweries', city: 'Auckland', country: 'New Zealand', url: 'https://thumbs.dreamstime.com/b/industrial-wastewater-discharged-pipe-water-114630676.jpg', lat_long_wsg84: '[-37.0756636,174.9624092]' },
        { name: 'Lion Breweries', city: 'Auckland', country: 'New Zealand', url: 'http://peakwater.org/wp-content/uploads/2010/10/mangere_wastewater_treatment_plant_full_size_landscape.jpg', lat_long_wsg84: '[-36.9628605,174.8935236]' },
        { name: 'Lion Breweries', city: 'Auckland', country: 'New Zealand', url: 'http://peakwater.org/wp-content/uploads/2010/10/mangere_wastewater_treatment_plant_full_size_landscape.jpg', lat_long_wsg84: '[-36.9628605,174.8935236]' },
        { name: 'Fosters Group', city: 'Melbourne', country: 'Australia', url: '', lat_long_wsg84: '[-37.9716913,144.7722715]' },


      ]);
    });
};
