const fs = require("fs");
const path = require("path");


const mainRoute = (request, response) => {
  const filePath = path.join(__dirname, '../../../', 'assets', 'pizza.jpg');
  fs.stat(filePath, err => {
    if(err) {
      throw err;
    }
    const image = fs.statSync(filePath);

  response.writeHead(200, {
    'Content-Type': 'image/jpeg',
    'Content-Length': image.size
  });

  const readStream = fs.createReadStream(filePath);

  readStream.pipe(response);
  });  
};

module.exports = mainRoute;
