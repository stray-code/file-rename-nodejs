const fs = require("fs");
const path = require("path");

const dir = "./files";
const fileNameList = fs.readdirSync(dir);

const targetFileNameList = fileNameList.filter(fileName => {
  return fileName !== '.DS_Store'
})

targetFileNameList.forEach(fileName => {
  // MEMO: 新しいファイル名
  const newName = fileName.split('_')[1];

  const before = path.join(dir, fileName);
  const after = path.join(dir, newName);

  fs.rename(before, after, err => {
    if (err) {
        throw err;
    }

    console.log(before + "-->" + after);
  });
});
