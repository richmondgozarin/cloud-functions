var vision = require('@google-cloud/vision');

exports.analyzeImage = function(context, data){
  console.log('Submitting image to Cloud Vision API: ' + file);
  vision.detectLabels(data.mediaLink, {verbose: true},
    function(err, labels, apiResponse) {
      for (label of labels) {
        console.log(label.desc + ` (${label.score}%)`);
      }
      context.success();
    });
};
