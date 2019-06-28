import request from 'superagent'


export function getBeers() {
  request.get('http://localhost:3000/api/v1/beers/')
    .then(res => {
      console.log('getBeersAPI:', res.body)
    })
}