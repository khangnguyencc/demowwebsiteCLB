var num=document.getElementsByClassName("num");
var inc=[];
function intervalFunc(){
  for(let i=0;i<num.length;i++){
    inc.push(0);
    if(inc[i]!=num[i].getAttribute("data-val")){
      inc[i]++;
    }
    num[i].innerHTML=inc[i]
  }
}
var main=document.getElementById("main");
window.onscroll=function(){ 
 var timer= setInterval(()=>{

  var topElem=main.offsetTop;
  var btmElem=main.offsetTop +main.clientHeight;
  var topScreen=window.pageYOffset;
  var btmScreen=window.pageYOffset +window.innerHeight;
  if(btmScreen>topElem&&topScreen<btmElem){
    intervalFunc();
  }else{
    clearInterval(timer);
    //Lệnh ở dưới chỉ dùng trong trường hợp nếu muốn reset lại số khi kéo lên,xuống....
    // for(let i=0;i<num.length;i++){ 
    //   num[i].innerHTML=1;
    //   inc=[];
    // }
  }
},700);
}