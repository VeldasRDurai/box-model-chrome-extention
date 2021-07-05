const boxModeling = ( node ) => {
    node.style.backgroundClip = 'content-box';
    var bgcolor = Math.floor(Math.random()*16777215).toString(16);
    var color = (0xFFFFFF ^ parseInt( bgcolor.substring(1),16)).toString(16).slice(-6);
    node.style.backgroundColor = '#'+ bgcolor;
    node.style.color = '#' + color;
    node.style.outline = '2px solid #'+ color;
    if( node.childElementCount > 0 ){
        for( child of node.children ){
            boxModeling( child );
        }
    }
}
const cancelBoxModeling = ( node ) => {
    node.style.outline = '';
    node.style.backgroundClip = '';
    node.style.backgroundColor = '';
    node.style.color = '';
    if( node.childElementCount > 0 ){
        for( child of node.children ){
            cancelBoxModeling( child );
        }
    }
}
chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener( (request, sender, sendResponse) => 
    request.activate ? boxModeling(document.body) : cancelBoxModeling(document.body) );