import request from 'superagent'


export function getBeers(callback) {
  request.get('http://localhost:3000/api/v1/beers/')
    .end((err, res) => {
      // console.log(res.body)
      callback(res.body)
    })
}

export function getSingleBeer(id, callback) {
  request.get('http://localhost:3000/api/v1/beers/' + id)
    .end((err, res) => {
      console.log(res.body)
      callback(res.body)
    })
}

export function getPubs(callback) {
  request.get('http://localhost:3000/api/v1/pubs/')
    .end((err, res) => {
      callback(res.body)
    })
}