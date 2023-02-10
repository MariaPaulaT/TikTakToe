var player1Cards =[];
var player2Cards =[];


var started = false;
var actualPlayer = 0;

$(document).keypress(function(){
    if(started === false){
        $("h2").text("It´s player 1 turn!");
        $("h3").text("");
        actualPlayer = 1;
        started = true;
    }   
});

$(".btn").click(function(){
    if(started === true){
            var buttonChosen = $(this).attr("id");
            playersTurn(buttonChosen);
    }
        
});



function playersTurn (buttonChosen){
    if (actualPlayer === 1 ){
        if (!player1Cards.includes(buttonChosen) && !player2Cards.includes(buttonChosen)){
            $("#"+buttonChosen).addClass("circle");
            player1Cards.push(buttonChosen);
            var audio = new Audio("sounds/" + "sounds_red" + ".mp3");
            audio.play();

            checkAnswer (player1Cards,actualPlayer);
            actualPlayer=2;
            
        }else{
            var audio = new Audio("sounds/" + "sounds_wrong" + ".mp3");
            audio.play();
        }
    } else{
        if (!player1Cards.includes(buttonChosen) && !player2Cards.includes(buttonChosen)){
        
        $("#"+buttonChosen).addClass("cerca");
        player2Cards.push(buttonChosen);
        var audio = new Audio("sounds/" + "sounds_yellow" + ".mp3");
            audio.play();

        checkAnswer (player2Cards,actualPlayer);
        actualPlayer=1;
        
        }else{
            var audio = new Audio("sounds/" + "sounds_wrong" + ".mp3");
            audio.play();
        }
    }
}

function checkAnswer (playerCards, actualPlayer){
    if(playerCards.includes("one")&& playerCards.includes("two")&& playerCards.includes("three")|| playerCards.includes("four")&& playerCards.includes("five")&& playerCards.includes("six")
    || playerCards.includes("seven")&& playerCards.includes("eight")&& playerCards.includes("nine")|| playerCards.includes("one")&& playerCards.includes("four")&& playerCards.includes("seven")|| playerCards.includes("two")&& playerCards.includes("five")&& playerCards.includes("eight")
    || playerCards.includes("three")&& playerCards.includes("six")&& playerCards.includes("nine")|| playerCards.includes("one")&& playerCards.includes("five")&& playerCards.includes("nine") || playerCards.includes("three")&& playerCards.includes("five")&& playerCards.includes("seven")){
        $("h2").text("⭐ Player "+ actualPlayer + " Wins! ⭐");

        setTimeout(function(){
            $(".btn").removeClass("circle");
            $(".btn").removeClass("cerca");
        },500)
        started = false;
        $("h2").after("<h3>Press A key to start again!</h3>");
        player1Cards=[];
        player2Cards=[];
   }else if(player1Cards.length + player2Cards.length === 9){
        $("h2").text("It's a tie! 😕");
        var audio = new Audio("sounds/" + "sounds_wrong" + ".mp3");
            audio.play();
        setTimeout(function(){
            $(".btn").removeClass("circle");
            $(".btn").removeClass("cerca");
        },500)

        started = false;
        $("h2").after("<h3>Press A key to start again!</h3>");
        player1Cards=[];
        player2Cards=[];
    }
    else if(actualPlayer===1){
        actualPlayer=2;
        $("h2").text("It´s player 2 turn!");
    }else{
        actualPlayer=1;
        $("h2").text("It´s player 1 turn!");
    }
}

function playSound(name){
    var audio = new Audio("sounds/" + name + ".mp3");
    audio.play();
}