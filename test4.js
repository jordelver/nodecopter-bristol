var arDrone = require('ar-drone');
var client  = arDrone.createClient();

client.takeoff(function() {
  client
    .after(1000, function() {
      this.up(1);
    })
    .after(4000, function() {
      this.stop();
    })
    .after(3000, function() {
      this.animate('flipAhead', 500);
    })
    .after(3000, function() {
      this.land();
    })
});

