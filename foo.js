exports.handler = function (event, context) {
  if(event.trash_cans == '12731122') {
    context.succeed({
      'message': 'thanks for recycling!'
    });
  } else {
    context.succeed({
      'message': 'You have disappointed mother earth.'
    });
  }
}
