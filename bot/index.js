require('dotenv').config();
const schedule = require('node-schedule');

const privateKey = process.env.PRIVATE_KEY;
const stakeManage = process.env.STAKE_MANAGER;

function main() {}

main();

schedule.scheduleJob('0 17 ? * 0,4-6', function(){
  main();
});
