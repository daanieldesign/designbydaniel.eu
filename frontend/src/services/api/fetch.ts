export const api = ( uri: string, method: string = 'GET', body: any = null, headers: any = { 'content-type': 'application/json' } ) =>
  new Promise((resolve, reject) => {
    fetch('http://localhost:5000/' + uri, {
      method,
      body,
      headers,
    })
      .then((response) => response.json())
      .then((json) => {
          if (json.cod === 200 || json.cod === 304) resolve(json.cod);
          else if (json.cod === 500 || json.cod === 404) throw json.cod;
          else reject(json.cod);
      })
      .catch((err) => {
          throw err;
      });
  });