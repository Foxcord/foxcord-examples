const { join } =  require('path');
const { readdir } = require('fs/promises');

export default async function(dir, callback) {
  dir = join(process.cwd(), dir);
  readdir(dir).then(async dirnames => {
    for(const dirname of dirnames) {
      readdir(join(dir, dirname)).then(async filenames => {
        for(const filename of filenames) {
          callback(join(dir, dirname, filename));
        };
      });
    };
  });
};
