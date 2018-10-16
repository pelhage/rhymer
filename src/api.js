const https = require('https')

function makeRequest(query) {
  const request = new Promise((resolve, reject) => {
    https.get(`https://api.datamuse.com/words?${query}`, (res) => {
      const { statusCode } = res;
      const contentType = res.headers['content-type'];
  
      let error;
      if (statusCode !== 200) {
        error = new Error('Request Failed.\n' +
                          `Status Code: ${statusCode}`);
      } else if (!/^application\/json/.test(contentType)) {
        error = new Error('Invalid content-type.\n' +
                          `Expected application/json but received ${contentType}`);
      }
      if (error) {
        console.error(error.message);
        // consume response data to free up memory
        res.resume();
        Promise.reject(error)
      }
  
      res.setEncoding('utf8');
      let rawData = '';
      res.on('data', (chunk) => { rawData += chunk; });
      res.on('end', () => {
        try {
          const parsedData = JSON.parse(rawData);
          // console.log(parsedData);
          resolve(parsedData)
        } catch (e) {
          console.error(e.message);
          reject(e.message)
        }
      });
    }).on('error', (e) => {
      console.error(`Got error: ${e.message}`);
      reject(e.message)
    });
  })

  return request
}


module.exports = makeRequest
