const fileUtil = require('../util/fileUtil.js'); 
const LifeCycle = require('../js/picoco.js').LifeCycle;
const picoco = new (require('../js/picoco.js').Picoco)();
console.log(picoco);

$(document).ready(function() {
    registerEvents();    
});

function registerEvents() {
    $('#configuration_block').click(function() {
        selectFolder();
    }); 
}

function selectFolder() {
    var folder = fileUtil.selectFolder();
    if (folder == undefined) {
        console.log('user give up selecting a folder.');
    } else {
        var imagesInDir = fileUtil.imagesInDir(folder); 
        if (imagesInDir.length == 0) {
            console.log('no images in folder(' + folder + ').'); 
        } else {
            console.log('images in folder(' + folder + '): ' + imagesInDir);
        }
    }
}
