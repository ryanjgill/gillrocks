const fs = require('fs')

fs.readdir('public/images/printing', (err, filamentFolders) => {
  if (err) { console.log(err); }

  filamentFolders = filamentFolders.filter(folder => folder !== '.DS_Store')

  filamentFolders.forEach(filamentFolder => {
    fs.readdir(`public/images/printing/${filamentFolder}`, (err, files) => {
      if (err) { console.log(err); }

      files = files.filter(file => file !== 'thumbnails')

      let output = files.map(file => `images/printing/${filamentFolder}/${file}`)
      console.log({
        [filamentFolder]: files
      });
    })
  })
})