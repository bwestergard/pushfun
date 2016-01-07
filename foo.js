exports.handler = function (event, context) {
  if(!event.changeSet.trash_cans) return;

  if (event.changeSet.trash_cans === '12731122') {
    context.succeed({
      'message': 'thanks for recycling!',
      'option': event.trash_cans
    });
  } else {
    context.succeed({
      'message': 'You have disappointed mother earth.',
      'option': event.trash_cans
    });
  }
}
