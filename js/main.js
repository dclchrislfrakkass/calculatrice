
    if (isNaN(n1)) {
        document.getElementById('input1').style.backgroundColor = 'red';
    }
    else {
        document.getElementById('input1').style.backgroundColor = 'black';
        xGood= true;
    }
    
    
    if (isNaN(n2)) {
        document.getElementById('input2').style.backgroundColor = 'red';
    }
    else {
        document.getElementById('input2').style.backgroundColor = 'black';
        yGood= true;
    }

function calcul(){ 
    
    var n1 = parseInt(document.getElementById("input1").value);
    var n2 = parseInt(document.getElementById("input2").value);
    
    var operation = document.getElementById('sel').value;
    
    
   
    
    
    
    if (operation === "+") {
        document.getElementById("results").innerHTML = n1+n2;
        console.log(n1 + n2);
    }
    if (operation ==="*") {
        document.getElementById("results").innerHTML = n1*n2;
        console.log(n1 * n2);
    }
    if (operation ==="-") {
        document.getElementById("results").innerHTML = n1-n2;
        console.log(n1 - n2);
    }
    if (operation === "/") {
        document.getElementById("results").innerHTML = n1 / n2;
        console.log(n1 / n2);
    }
    if (operation === "%") {
        document.getElementById("results").innerHTML = n1 % n2;
        console.log(n1 % n2);
    }
    
    
}














//////////////////////////////////////////////////////////////////////////////////
////                                                                          ////
////                                                                          ////
////                              scrap/trash                                 ////
////                                                                          ////
////                                                                          ////
////                                                                          ////
//////////////////////////////////////////////////////////////////////////////////

/*


document.getElementById("equal").addEventListener("click", ending());

function ending (){
    resultat = eval(x+y);
    
    
    
    console.log(resultat);
}















//variables
// xGood = false;
// yGood = false;
// var i = 0;
// var input1;
// var input2;
// var texte;
// var liste;
// var resultat;






/*
// var input1 = parseInt(document.getElementById("input1").value);
// var input2 = parseInt(document.getElementById("input2").value);

// function start(){

// liste = document.getElementById("sel");
// texte = liste.options[liste.selectedIndex].value;
// console.log("liste : "+liste +"texte : " +texte);

function addi(){   
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var resultat = eval(input1 + input2);
    console.log("addition !");
    console.log(resultat);
    // ending(resultat);
}
document.getElementById("equal").addEventListener("click", ending(resultat))

// }
function ending(resultat){
    document.getElementById("results").innerHTML = resultat;
}


// document.getElementById("equal").addEventListener("click", additionne);


// function additionne(){

//     if (texte == "+") {
//        var resultat = eval(input1 + input2);
//     }
//     console.log(resultat);


//     resultat = input1 + input2;
//     document.getElementById("results").innerHTML = resultat;


// }




















//////////////////////
/////
/////
//selectors don't work
/////
/////
//////////////////////




// var selectElem = document.getElementById("sel");


// selectElem.addEventListener("change", function() {
//     var i = selectElem.selectedIndex;
//     select (i);
//     console.log(i);



// })

// function selec() {
//     if ( i = 0){
//         document.getElementById("equal").addEventListener("click", additionne);
//     }    else if (i = 1)
//     document.getElementById("equal").addEventListener("click", multiplie);

// }

/*
console.log(xGood,yGood);

//select
function selector() {
    var x = document.getElementById("sel");
    var i = x.selectedIndex;
    // document.getElementById("choiceTest").innerHTML = x.options[i].text;
    console.log(i);
    
    if ( i = 0){
        document.getElementById("equal").addEventListener("click", additionne);
    }
    // else ( i == 0){
    //     document.getElementById("equal").addEventListener("click", additionne);
    // }
}




////do an addition ///////
function additionne() {
    
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var resultat = eval(input1 + input2);
    console.log("addition !");
    console.log(resultat);
    ending(resultat);
}


function multiplie() {
    
    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var resultat = eval(input1 *+ input2);
    console.log("addition !");
    console.log(resultat);
    ending(resultat);
}

// document.getElementById("equal").addEventListener("click", additionne);

function ending(resultat){
    document.getElementById("results").innerHTML = resultat;
}


//////Calculate //////
// document.getElementById("results").addEventListener("click", ending(resultat));



// //validation of input number

document.getElementById("enterTwo").addEventListener("click", test);
document.getElementById("enterOne").addEventListener("click", test2);
document.getElementById("equal").addEventListener("click", test2);
document.getElementById("equal").addEventListener("click", test);


function test(){
    
    var x = document.forms["calculator"]["input1"].value;
    if (isNaN(x)) {
        document.getElementById('enterOne').style.backgroundColor = 'red';
    }
    else {
        document.getElementById('enterOne').style.backgroundColor = 'black';
        xGood= true;
    }
}
function test2(){
    
    var y = document.forms["calculator"]["input2"].value;
    if (isNaN(y)) {
        document.getElementById('enterTwo').style.backgroundColor = 'red';
    }
    else {
        document.getElementById('enterTwo').style.backgroundColor = 'black';
        yGood= true;
    }
    
    
}








///////////////////////////////////////////////////////////////
////                                                       ////
////                                                       ////
////                old scrap                              ////
////                                                       ////
////                                                       ////
///////////////////////////////////////////////////////////////


// //////defined the method
// // function method(){
// //     var a = document.getElementById("mathMethod");
// //     var b = a.selectedIndex; 
// //     document.getElementById("choiceTest").innerHTML = a.options[b].text;

// // }





// function calculate() {
//     if (xGood==true && yGood==true) {
//         console.log("chun= "+chUn);
//         var resultat= chUn + chDeux;
//         console.log(resultat);
//         document.getElementById("equal").style.backgroundColor="blue";
//         document.getElementById("results").innerHTML= resultat;
//     }    else {
//         document.getElementById("equal").style.backgroundColor="red";
//         document.getElementById("results").innerHTML="erreur!";
//     }}




//     /*

//     //reset form
//     function reset() {
//         document.getElementById("calculator").reset();

//         */