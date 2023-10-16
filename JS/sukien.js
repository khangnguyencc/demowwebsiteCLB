window.addEventListener('scroll',reveal);
window.addEventListener('scroll',reveal_1);
window.addEventListener('scroll',reveal_2);

function reveal(){
    var reveal = document.querySelectorAll('.reveal')


    for(var i = 0 ; i < reveal.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveal[i].getBoundingClientRect().top;
        var revealpoint = 0

        if(revealtop < windowheight- revealpoint){
            reveal[i].classList.add('active');
        }
    }

} 
function reveal_1(){
    var reveal = document.querySelectorAll('.reveal_1')


    for(var i = 0 ; i < reveal.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveal[i].getBoundingClientRect().top;
        var revealpoint = 0

        if(revealtop < windowheight- revealpoint){
            reveal[i].classList.add('active_1');
        }
    }

} 

function reveal_2(){
    var reveal = document.querySelectorAll('.reveal_2')


    for(var i = 0 ; i < reveal.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveal[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight- revealpoint){
            reveal[i].classList.add('active_2');
        }
    }

} 