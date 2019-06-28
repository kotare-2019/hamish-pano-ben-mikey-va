import request from 'superagent'


export function getBeers(callback) {
  request.get('/api/v1/beers/')
    .end((err, res) => {
      // console.log(res.body)
      callback(res.body)
    })
}

export function getSingleBeer(id, callback) {
  request.get('/api/v1/beers/' + id)
    .end((err, res) => {
      console.log(res.body)
      callback(res.body)
    })
}