//variables
xGood = false;
yGood = false;
console.log(xGood,yGood);

//select



document.getElementById("equal").addEventListener("click", additionne);




////do an addition ///////
function additionne() {

    var input1 = parseInt(document.getElementById("input1").value);
    var input2 = parseInt(document.getElementById("input2").value);
    var resultat = eval(input1 + input2);
    console.log("addition !");
    console.log(resultat);
    ending(resultat);
}


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