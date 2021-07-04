var toggleOff = true;
document.querySelector('#button').addEventListener( 'click', () => {
   if( toggleOff ){
        document.querySelector('#button').style.backgroundColor = 'White';
        document.querySelector('#button #key').style.left = '15px';
        // document.querySelector('#button #key').style.boxShadow = '0 0 20px 3px #61dafb';
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, { activate:true });
        });
   }  else {
        document.querySelector('#button').style.backgroundColor = '#20232a';
        document.querySelector('#button #key').style.left = '-15px';
        // document.querySelector('#button #key').style.boxShadow = 'none';
        chrome.tabs.query({active:true,currentWindow: true}, function(tabs){
            chrome.tabs.sendMessage(tabs[0].id, { activate:false });
        });
   }
   toggleOff = !toggleOff;
});