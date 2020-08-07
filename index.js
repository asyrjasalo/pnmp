#!/usr/bin/env node

const { closeSync, openSync, utimesSync } = require('fs');
const { join } = require('path');

const touch = path => {
  const time = new Date();
  try {
    utimesSync(path, time, time);
  } catch (err) {
    closeSync(openSync(path, 'w'));
  }
}

const filename = 'tralala';
const homedir = process.env.HOME || process.env.USERPROFILE;
const target = join(homedir, "tralala")

touch(target);
console.log(`Touched ${target}, likely it did not replace npm.`);
