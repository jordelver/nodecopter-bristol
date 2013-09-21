var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff(function() {
  client
    .after(1000, function() {
      this.up(1);
    })
    .after(1500, function() {
      this.stop();
    })
    .after(2000, function() {
      this.front(1);
    })
    .after(2000, function() {
      this.stop();
    })
    .after(3000, function() {
      this.right(1);
    })
    .after(2000, function() {
      this.stop();
    })
    .after(3000, function() {
      this.back(1);
    })
    .after(2000, function() {
      this.stop();
    })
    .after(3000, function() {
      this.left(1);
    })
    .after(2000, function() {
      this.stop();
    })
    .after(3000, function() {
      this.land();
    })
});

