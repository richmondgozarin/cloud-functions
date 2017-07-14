require('@google/cloud-debug');

exports.richWorld = function(req, res){
  let name = req.query.name || 'Cloud First';
  let mood = req.query.mood || 'happy';
  let isWeatherBeautiful = false;
  if (!isWeatherBeautiful) {
    console.log('Bad Weather ALWAYS breaks my demos!')
  }
  console.log('I made it this far with no erros, hooray!');
  res.status(200).send('Hello, ' + `${name}` + '!');

}
