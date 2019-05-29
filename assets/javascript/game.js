// Var wins : 
// var losses : 
// Var number between 19-120 : randomonly generated at page load an new game
// Crystals 1 - random number goes in 1-12 and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 2 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 3 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Crystals 4 - random number goes in and is locked for the game + on click is added to score / at reset game value is changed 
// Your score  - when equal to the  var random number  win game, when passes var random number loss game
 
var wins=0;
var loss=0;
var box1Number=[];
var box2Number=[];
var box3Number=[];
var box4Number=[];
var tally=0;
var buckets=[(Math.floor(Math.random()* 120))+1]


$(document).ready(function(){

var basketball = $(".basketball");

// $("#wins").html(win);
$("#score").html(tally);
$("#buckets").html("Get Buckets: " + buckets);

function endGame(){
if ( tally === buckets){
    alert (" you win !")
    tally=0;
    buckets=[(Math.floor(Math.random()* 120))+1]
    wins++
}
else if
    (tally > buckets){
    alert (" you lose ! ")
    tally=0;
    buckets=[(Math.floor(Math.random()* 120))+1]
    losses++
}
}

// Button1 when clicked generates a number between 1-12



$(".basketball").on("click",function(){

    var boxoneguess = [(Math.floor(Math.random()* 12))+1];
    box1Number.push(boxoneguess)
    tally +=  + boxoneguess;
    $("#score").html(tally);

})



// Button2 when clicked generates a number between 1-12
$(".steph").on("click",function(){
    endGame()
    var boxtwoguess =[(Math.floor(Math.random()* 12))+1];
    box2Number.push(boxtwoguess);
    tally +=  + boxtwoguess;
    $("#score").html(tally);
})


// Button3 when clicked generates a number between 1-12
$(".leonard").on("click",function(){

    var boxthreeguess =[(Math.floor(Math.random()* 12))+1];
    tally +=  + boxthreeguess;
    box3Number.push(boxthreeguess);
    tally +=  + boxthreeguess;
    $("#score").html(tally);
    // $("#score").text(boxthreeguess);
})

// Button4 when clicked generates a number between 1-12
$(".klay").on("click",function(){
    if ( tally === buckets){
        endGame()
    }
    else {
        var boxfourguess =1
    box4Number.push(boxfourguess);
    tally +=  + boxfourguess;
    $("#score").html(tally);
    // $("#score").text(boxfourguess);
    }
})

$(".basketball").on("click", function() {
    basketball.animate({ left: "+=200px" }, "normal");
  });
  
})
