const cron = require('node-cron');
const express = require('express');

app = express();

const every3Seconds = '*/3 * * * * *';
const every10Seconds = '*/10 * * * * *';
const every15Mintues = '*/15 * * * *';
const every30MIntues = '*/30 * * * *';
const everyHour = '* */1 * * *';

const task = cron.schedule(every10Seconds, () => {
    console.log("Cron Job executed");
});

task.start();

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`Listening on port ${port}...`));