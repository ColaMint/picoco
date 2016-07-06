const dialog = require('electron').remote.dialog;
const fs = require('fs.extra');
const mime = require('mime');

exports.selectFolder = function() {
    var folder = dialog.showOpenDialog({ properties: [ 'openDirectory' ]});
    if (folder != undefined) {
        folder = folder[0]; 
    }
    return folder;
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

