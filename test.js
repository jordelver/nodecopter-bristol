var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff(function() {
  client.after(1000, function() {
    console.log('Forwards');
    this.front(0.25);
  })
  .after(3000, function() {
    console.log('Stopping');
    this.stop();
  })
  .after(1000, function() {
    console.log('Backwards');
    this.back(0.25);
  })
  .after(3000, function() {
    console.log('Stopping');
    this.stop();
  })
  .after(1000, function() {
    console.log('Stopping');
    this.land(function() {
      console.log('Landing');
    });
  })
});

