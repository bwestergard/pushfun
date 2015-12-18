exports.handler = function(event, context) {
  context.succeed(
    (event.record.capacity < 30) && (event.changeSet.capacity > 30)
  )
}
