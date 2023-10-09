window.addEventListener('scroll',thongtin_1);
window.addEventListener('scroll',thongtin_2);



function thongtin_1(){
    var thongtin_1 = document.querySelectorAll('.thongtin_1')


    for(var i = 0 ; i < thongtin_1.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop = thongtin_1[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight- revealpoint){
            thongtin_1[i].classList.add('thong_tin_1');
        }

    }

}

function thongtin_2(){
    var thongtin_2 = document.querySelectorAll('.thongtin_2')


    for(var i = 0 ; i < thongtin_2.length ; i++){
        var windowheight = window.innerHeight;
        var revealtop = thongtin_2[i].getBoundingClientRect().top;
        var revealpoint = 150

        if(revealtop < windowheight- revealpoint){
            thongtin_2[i].classList.add('thong_tin_2');
        }

    }

}

