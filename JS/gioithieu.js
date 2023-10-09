window.addEventListener('scroll',reveal);
window.addEventListener('scroll',reveal2_1);
window.addEventListener('scroll',reveal2_2);
window.addEventListener('scroll',reveal2_3);


function reveal(){
    var reveals = document.querySelectorAll('.reveal')


for(var i = 0 ; i < reveals.length ; i++){
    var windowheight = window.innerHeight;
    var revealtop = reveals[i].getBoundingClientRect().top;
    var revealpoint = 150

    if(revealtop < windowheight- revealpoint){
        reveals[i].classList.add('active');
    }
    // else{
    //     reveals[i].classList.remove('active');
    // }
}
}


function reveal2_1(){
    var reveal2_1 = document.querySelectorAll('.reveal2_1')


    for(var i = 0 ; i < reveal2_1.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveal2_1[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight- revealpoint){
            reveal2_1[i].classList.add('active2_1');
        }
        // else{
        //     reveal2_1[i].classList.remove('active2_1');
        // }
    }

}

function reveal2_2(){
    var reveal2_2 = document.querySelectorAll('.reveal2_2')


    for(var i = 0 ; i < reveal2_2.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveal2_2[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight- revealpoint){
            reveal2_2[i].classList.add('active2_2');
        }
        // else{
        //     reveal2_2[i].classList.remove('active2_2');
        // }
    }

}

function reveal2_3(){
    var reveal2_3 = document.querySelectorAll('.reveal2_3')


    for(var i = 0 ; i < reveal2_3.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop = reveal2_3[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight- revealpoint){
            reveal2_3[i].classList.add('active2_3');
        }
        // else{
        //     reveal2_3[i].classList.remove('active2_3');
        // }
    }

}
