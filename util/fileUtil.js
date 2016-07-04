const dialog = require('electron').remote.dialog;
const fs = require('fs.extra');
const mime = require('mime');

exports.selectFolder = function() {
    return dialog.showOpenDialog({ properties: [ 'openDirectory' ]});
}

exports.copyFile = function(src, dest, errorHandler) {
    fs.copy(src, dest, { replace: true }, errorHandler); 
}

exports.moveFile = function(src, dest, errorHandler) {
    fs.move(src, dest, { replace: true }, errorHandler); 
}

exports.imagesInDir = function(path) {
    var files = fs.readdirSync(path);
    var images = new Array();
    var isImage = function(file) {
        var m = mime.lookup(file);
        var re = /^image\/.+/
        return m.match(re) != null
    }
    for (var i in files) {
        file = files[i];
        if (isImage(file)) {
            images.push(file);
        }
    }
    return images;
}

