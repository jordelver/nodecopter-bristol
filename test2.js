var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff(function() {
  client
    .after(1000, function() {
      this.up(1);
    })
    .after(3000, function() {
      this.stop();
    })
    .after(1000, function() {
      this.front(1);
    })
    .after(2000, function() {
      this.stop();
    })
    .after(5000, function() {
      this.clockwise(0.75);
    })
    .after(12500, function() {
      this.stop();
    })
    .after(1000, function() {
      this.front(1);
    })
    .after(2000, function() {
      this.stop();
    })
    .after(3000, function() {
      this.land();
    })
});

