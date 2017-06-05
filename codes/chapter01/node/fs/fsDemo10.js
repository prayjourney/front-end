/**
 * 读取目录
 * Created by zhangpeng0913 on 2017/6/5.
 */
var fs = require("fs");

console.log("查看 temp 目录");
fs.readdir("temp", function (err, files) {
  if (err) {
    return console.error(err);
  }
  files.forEach(function (file) {
    console.log(file);
  });
});
