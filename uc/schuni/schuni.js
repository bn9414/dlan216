//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var jhd1= document.getElementsByClassName('jhd1');
            var cs3= document.getElementsByClassName('cs3');
             var cs4= document.getElementsByClassName('cs4');
    var spanwhite= document.getElementsByClassName('spanwhite');
    
        
function portfullf(){
cs3[0].style.left="75%";
    cs4[0].style.left="25%";
    spanwhite[0].style.left="0px";
    spanwhite[1].style.left="0px";
    
        jhd1[0].style.left="0px";
        jhd1[1].style.left="0px";
    
    
    cs3[0].style.opacity="1";
    cs4[0].style.opacity="1";
    spanwhite[0].style.opacity="1";
    spanwhite[1].style.opacity="1";
     
        jhd1[0].style.opacity="1";
        jhd1[1].style.opacity="1";
    
}

portfullf();

    });


var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);





var bswit= document.getElementsByClassName('bswit');

var bsin= document.getElementsByClassName('bsin');

var btall= document.getElementsByClassName('btall');

function bswitch(n){
    
    bsin[0].style.backgroundColor="#fcfcfc";
     bsin[1].style.backgroundColor="#fcfcfc";
     bsin[2].style.backgroundColor="#fcfcfc";
    
     
   
    btall[0].style.display="none";btall[1].style.display="none";btall[2].style.display="none";
    
     btall[n].style.display="flex";
     
bsin[n].style.backgroundColor="#454545";
    
    

}
if(w<880){
bswitch(0);
}
bswit[0].addEventListener('click',function() {bswitch(0);}, false);

bswit[1].addEventListener('click',function() {bswitch(1);}, false);

bswit[2].addEventListener('click',function() {bswitch(2);}, false);




var jptar=document.getElementsByClassName('jptar');

var testihd=document.getElementsByClassName('testihd');
var offcon=document.getElementsByClassName('off_con');




window.onscroll = function() {scrollani()};

function scrollani() {
    /* home*/
 if(w>760){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
 jptar[0].style.top="0px";
        jptar[1].style.top="0px";
        jptar[2].style.top="0px";
        
        jptar[0].style.opacity="1";
        jptar[1].style.opacity="1";
        jptar[2].style.opacity="1";
 }

 }
    
    
     if(w<480){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
 jptar[0].style.top="0px";
        jptar[1].style.top="0px";
        jptar[2].style.top="0px";
        
        jptar[0].style.opacity="1";
        jptar[1].style.opacity="1";
        jptar[2].style.opacity="1";
 }

 }

    
    
    
     if(w>880){
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
 testihd[0].style.left="0px";
    
        
        testihd[0].style.opacity="1";
       
 }

 }
    
         if(w>1000){
    if (document.body.scrollTop > 1000 || document.documentElement.scrollTop > 1000) {
 offcon[0].style.top="0px";
         offcon[0].style.opacity="1";
        
         offcon[1].style.top="0px";
         offcon[1].style.opacity="1";
        
         offcon[2].style.top="0px";
         offcon[2].style.opacity="1";
        
           offcon[3].style.top="0px";
         offcon[3].style.opacity="1";
       
 }

 }

    
    
    
    
    



}























