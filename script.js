
var count = 0;

function changeCount(num){
     count += num;
     document.getElementById("Count").innerHTML= count ;
}
function resetCount(num){
     count = 0;
     document.getElementById("Count").innerHTML = count ;
}

