const fs = require("fs");
const path = require("path");

const dir = "./files";
const fileNameList = fs.readdirSync(dir);

const targetFileNameList = fileNameList.filter(fileName => {
  return fileName !== '.DS_Store'
})

targetFileNameList.forEach((fileName, index) => {
  // MEMO: 新しいファイル名
  const number = `000${index + 1 + 20 * 0}`.slice(-3)

  const replacedName = fileName.replace(/(\d{4})(\d{2})(\d{2})(\d+)/g, '$1_$2_$3')

  const newName = `${number}_${replacedName}`

  // const newName = fileName.split('１_')[1];

  const before = path.join(dir, fileName);
  const after = path.join(dir, newName);

  fs.rename(before, after, err => {
    if (err) {
        throw err;
    }

    console.log(before + "-->" + after);
  });
});
