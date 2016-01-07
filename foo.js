// final

exports.handler = function (event, context) {
context.succeed({
  'message': 'got event',
  'event': event
});
}
