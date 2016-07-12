const fileUtil = require('../util/fileUtil.js'); 
const LifeCycle = require('../js/picoco.js').LifeCycle;
const picoco = new (require('../js/picoco.js').Picoco)();

$(document).ready(function() {
    registerEvents();    
    picoco.changeState(LifeCycle.SELECT_FOLDER);
});

function registerEvents() {

    $('#btn-select-folder').click(function() {
        selectFolder();
    }); 

    picoco.onStateChanged(function(oldState, newState) {
        if (oldState == LifeCycle.SELECT_FOLDER) {
            $('#btn-select-folder').prop('disabled', true); 
        } else if (newState == LifeCycle.SELECT_FOLDER) {
            $('#btn-select-folder').prop('disabled', false); 
        } 
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
            $('#num-of-selected-pics').text(imagesInDir.length);
            picoco.folder = folder;
            picoco.picNum = imagesInDir.length;
            picoco.imagesInFolder = imagesInDir.length;
            picoco.changeState(LifeCycle.CLASSIFY_PICS);
        }
    }
}
