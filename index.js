const express = require('express');
const { exec } = require('child_process');
const gpio = require('./gpio');
const app = express();

app.use('/', express.static('public'));

app.get('/api/step', (req, res) => {
    gpio.stepper(req.query.y, req.query.x, req.query.s, (err, stdout, stderr) => {
        const data = {
            query: req.query,
            err: err,
            stdout: stdout,
            stderr: stderr
        };
        res.json(data);
    });
});

app.get('/api/trigger', (req, res) => {
    gpio.trigger(req.query.s, (err, stdout, stderr) => {
        const data = {
            query: req.query,
            err: err,
            stdout: stdout,
            stderr: stderr
        };
        res.json(data);
    });
});

app.get('/api/images', (req, res) => {
    exec('ls ./public/images | grep png', (err, stdout, stderr) => {
        stdout = stdout.replace(/\n$/, '');
        res.json({ images: stdout.split('\n') });
    });
});

const port = 3000;

app.listen(port, '0.0.0.0', () => {
    console.log(`Server running at http://0.0.0.0:${port}`);
});