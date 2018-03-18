//import { DOMAIN } from './constants';

export const getRequest = (url, cb) => {
  const combinedUrl = 'http://192.168.86.45:3000/' + url;

  fetch(combinedUrl)
    .then((resp) => resp.json())
    .then((responseJson) => {
       cb(null, JSON.parse(responseJson))
    })
    .catch((err) => {
      cb(err, null)
    });
}
