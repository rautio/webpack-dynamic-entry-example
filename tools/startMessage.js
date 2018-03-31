import colors from 'colors';

/* eslint-disable no-console */

// Here you could also split the project between a 'development' and 'production' version with NODE_ENV

const usecase = process.env.USECASE || 'default'; //Be careful, 'default' means the usecase wasn't defined

console.log("Starting for usecase: ".yellow + usecase.red + "...".yellow);