module.exports = function(app){

  var fs = require('fs');

  app.get('/workouts/:weight', function(req, res){

    var weight = req.params.weight;

    console.log('received request for weight: ', weight);

    fs.readFile('./data/processed.json', 'utf-8', function(err, data){
      if (err) {
        console.log('Error reading regimen data: ', err);
        throw err;
      }

      var regimen = JSON.parse(data.trim())[weight];

      res.status(200).send(regimen);
    });
  });
};
