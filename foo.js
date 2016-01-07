exports.handler = function (event, context) {
  var message;
  if(!event.changeSet.trash_cans) {
    message = "no operation";
  };

  if (event.changeSet.trash_cans === 12731122) {
    message = "Yay!"
  } else {
    message = "Boo!"
  }

  context.succeed({
    'message': message,
    'changes': event.changeSet
  });
}
