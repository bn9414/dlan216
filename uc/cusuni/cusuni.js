//paste this code under the head tag or in a separate js file.
	// Wait for window load
	$(window).load(function() {
		// Animate loader off screen
		$(".se-pre-con").fadeOut("slow");;
        	
    var slidehd= document.getElementsByClassName('slidehd');
            var slmgj= document.getElementsByClassName('slmgj');
    
        
function portfullf(){
   slidehd[0].style.opacity="1";
    slidehd[0].style.left="0px";
    slmgj[0].className="slmgj slani";
    
    
}

portfullf();

    });


var h = parseInt(window.innerHeight);
        var w = parseInt(window.innerWidth);
var tswit= document.getElementsByClassName('tswit');

var tsin= document.getElementsByClassName('tsin');
var tall= document.getElementsByClassName('tall');
function tswitch(n){
    
    tsin[0].style.backgroundColor="#3a77c8";
     tsin[1].style.backgroundColor="#3a77c8";
     tsin[2].style.backgroundColor="#3a77c8";
     
   
    tall[0].style.display="none";tall[1].style.display="none";tall[2].style.display="none";
    
     tall[n].style.display="block";tsin[n].style.backgroundColor="#EEC643";
    

}
if(w<880){
tswitch(0);
}
tswit[0].addEventListener('click',function() {tswitch(0);}, false);

tswit[1].addEventListener('click',function() {tswitch(1);}, false);

tswit[2].addEventListener('click',function() {tswitch(2);}, false);




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






window.onscroll = function() {scrollani()};

function scrollani() {
    /* home*/
 if(w>1000){
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
 sidehdj[0].style.opacity="1";
 sidehdj[0].style.top="130px";
        
    
    }
 
 
 }




}























