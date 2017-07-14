
exports.analyzeImage = function(context, data){
  console.log('Processing image: ' + data.name);

  if (hasError) {
    context.failure('Error when analyzing image: ' + errMsg);
  } else {
    console.log('Image results: ' + results);
    context.success();
  }
};
