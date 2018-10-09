// declare function require(name: string);

// @ts-ignore
const appVersion: string = require('../../package.json').version;

export const environment = {
  production: true,
  appVersion: appVersion
};
