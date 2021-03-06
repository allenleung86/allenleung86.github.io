/**
 * Created by 890170 on 2017-02-09.
 */
"use strict";
var fs = require("fs");
var path = "../../photos/";
fs.readdir(path, function (err, files) {
    if (err) {
        return;
    }
    var arr = [];
    (function iterator(index) {
        if (index == files.length) {
            fs.writeFile("./photoData.json", JSON.stringify(arr, null, "\t"));
            console.log('get img success!');
            return;
        }
        fs.stat(path + files[index], function (err, stats) {
            if (err) {
                return;
            }
            if (stats.isFile()) {
                arr.push(files[index]);
            }
            iterator(index + 1);
        })
    }(0));
});