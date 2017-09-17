const { join } = require('path');
const { writeFileSync, lstatSync, readdirSync } = require('fs');

let photos = [];

const saveJSON = _ =>
  writeFileSync(`./src/photos/photos.json`, JSON.stringify(photos, '', 2));

const compare = (a, b) => lstatSync(b).cTimeMs - lstatSync(a).cTimeMs;

const isDirectory = source => lstatSync(source).isDirectory();
const getDirectories = source =>
  readdirSync(source)
    .map(name => join(source, name))
    .filter(isDirectory)
    .sort(compare);

const isPhoto = photo => photo.indexOf('jpg') >= 0;
const getPhotos = source =>
  readdirSync(source)
    .map(photo => join(source, photo))
    .filter(isPhoto)
    .sort(compare)
    .map(photo => photo.slice(11)); // remove "src/photos/" prefix

const dirs = getDirectories('./src/photos/');

dirs.forEach(dir => {
  photos.push({
    name: dir.slice(11), // remove "src/photos/" prefix
    photos: getPhotos(dir)
  });
});

saveJSON();
