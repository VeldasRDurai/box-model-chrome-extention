const boxModeling = ( node ) => {
    node.style.outline = '1px solid green';
    if( node.childElementCount > 0 ){
        for( child of node.children ){
            boxModeling( child );
        }
    }
}
const cancelBoxModeling = ( node ) => {
    node.style.outline = 'initial';
    if( node.childElementCount > 0 ){
        for( child of node.children ){
            cancelBoxModeling( child );
        }
    }
}
chrome.runtime.sendMessage({todo: "showPageAction"});
chrome.runtime.onMessage.addListener(function(request, sender, sendResponse){
    if (request.activate){
        // console.log(' ACTIVATED ');
        boxModeling(document.body);
    } else {
        // console.log(' DEACTIVATED ');
        cancelBoxModeling(document.body);
    }
});