import colors from 'colors';
//Some fun printouts when running the npm scripts to show which use case you are running.

/* eslint-disable no-console */

// Here you could also split the project between a 'development' and 'production' version with NODE_ENV

const usecase = process.env.USECASE || 'default'; //Be careful, 'default' means the usecase wasn't defined

console.log("Starting for usecase: ".yellow + usecase.red + "...".yellow);
