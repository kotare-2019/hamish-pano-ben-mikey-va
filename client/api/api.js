import request from 'superagent'


export function getBeers(callback) {
  request.get('http://localhost:3000/api/v1/beers/')
    .end((err, res) => {
      console.log(res.body)
      callback(res.body)
    })
}

export function getPubs() {
  request.get('http://localhost:3000/api/v1/pubs/')
    .then(res => {
      console.log('getPubsAPI:', res.body)
    })
}