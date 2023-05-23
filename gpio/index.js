const { exec } = require('child_process');

var maxBuffer = 10 * 1024 * 1000;

module.exports = {
    stepper: function (y, x, s, cb) {
        exec(`sudo python3 ./bin/stepper.py ${y} ${x} ${s}`, { maxBuffer : maxBuffer }, (err, stdout, stderr) => {
            if(cb) cb(err, stdout, stderr);
        });
    },

    trigger: function (seconds, cb) {
        exec(`sudo python3 ./bin/trigger.py ${seconds}`, { maxBuffer : maxBuffer }, (err, stdout, stderr) => {
            if(cb) cb(err, stdout, stderr);
        });
    }
}
