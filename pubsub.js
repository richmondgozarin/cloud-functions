
// Function triggered when a Pub/Sub message is published
exports.subscribe = function(context, data){
  console.log('Stats for ' + data.message.teamName);
  context.success();
}
