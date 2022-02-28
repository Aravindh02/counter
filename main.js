let increment= document.getElementById("increment");
 let decrement=document.getElementById("decrement");
 let restart=document.getElementById("restart");
  var input=document.getElementById("value");

let data = 0;

increment.addEventListener( "click", function() {
   data++;
  input.innerHTML= data;
});

decrement.addEventListener( "click", function() {
    if(data > 0){ 
    data--;
    input.innerHTML = data;
    }
 });
 restart.addEventListener( "click", function() {
    data = 0 ;
    input.innerHTML = data;
 });

 

