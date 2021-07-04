var toggleOff = true;
document.querySelector('#button').addEventListener( 'click', () => {
   if( toggleOff ){
        document.querySelector('#button').style.backgroundColor = 'White';
        document.querySelector('#button #key').style.left = '15px';
        // document.querySelector('#button #key').style.boxShadow = '0 0 20px 3px #61dafb';
   }  else {
        document.querySelector('#button').style.backgroundColor = '#20232a';
        document.querySelector('#button #key').style.left = '-15px';
        // document.querySelector('#button #key').style.boxShadow = 'none';
   }
   toggleOff = !toggleOff;
});