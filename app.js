const cron = require('node-cron');

const every3Seconds = '*/3 * * * * *';
const every10Seconds = '*/10 * * * * *';
const every15Mintues = '*/15 * * * *';
const every30MIntues = '*/30 * * * *';
const everyHour = '* */1 * * *';

const task = cron.schedule(every10Seconds, () => {
    console.log("Cron Job executed");
});

task.start();

