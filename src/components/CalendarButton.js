import { BUTTONENUM } from "../services/Config.js";

/*
let asdf = document.getElementById("up");
let asdff = document.getElementById("down");
let qwer = BUTTONENUM.BEFORE;
let qwerr = BUTTONENUM.AFTER;


document.addEventListener("click", function(){
    if(asdf === qwer){
            let diff = +1;
            window.alert("Mes siguiente " + diff);
    }else if(asdff === qwerr){
            let diff = -1;
            window.alert("Mes anterior " + diff);
    }
})
*/

document.getElementById("after").addEventListener("click", function() {
    let diff = +1;
    window.alert("Mes siguiente " + diff);
});

document.getElementById("before").addEventListener("click", function() {
    let diff = -1;
    window.alert("Mes anterior " + diff);
});

export const diff;



/*
document.getElementById("up").addEventListener("click", function() {
    if(qwer === asdf){
        addEventListener("click", function(){
            let diff = +1;
            window.alert("Mes siguiente " + diff);
        })
    }else{
        addEventListener("click", function(){
            let diff = -1;
            window.alert("Mes anterior " + diff);
        })
    }


    //document.getElementById("demo").innerHTML = "Hello World";
  });

document.getElementById("down").addEventListener("click", function() {
if(qwer === asdf){
    addEventListener("click", function(){
        let diff = +1;
        window.alert("Mes siguiente " + diff);
    })
}else{
    addEventListener("click", function(){
        let diff = -1;
        window.alert("Mes anterior " + diff);
    })
}


//document.getElementById("demo").innerHTML = "Hello World";
});


*/

