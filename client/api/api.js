import request from 'superagent'


export function getBeers() {
  request.get('http://localhost:3000/api/v1/beers/')
    .then(res => {
      console.log('getBeersAPI:', res.body)
    })
}

export function getPubs() {
  request.get('http://localhost:3000/api/v1/pubs/')
    .then(res => {
      console.log('getPubsAPI:', res.body)
    })
}