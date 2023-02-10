var player1Cards =[];
var player2Cards =[];


var started = false;
var actualPlayer = 0;

$(document).keypress(function(){
    if(started === false){
        $("h2").text("It´s player 1 turn!");
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
            
            checkAnswer (player1Cards,actualPlayer);
            actualPlayer=2;
            
        }
    } else{
        if (!player1Cards.includes(buttonChosen) && !player2Cards.includes(buttonChosen)){
        
        $("#"+buttonChosen).addClass("cerca");
        player2Cards.push(buttonChosen);
        checkAnswer (player2Cards,actualPlayer);
        actualPlayer=1;
        
        }
    }
}

function checkAnswer (playerCards, actualPlayer){
    if(playerCards.includes("one")&& playerCards.includes("two")&& playerCards.includes("three")|| playerCards.includes("four")&& playerCards.includes("five")&& playerCards.includes("six")
    || playerCards.includes("seven")&& playerCards.includes("eight")&& playerCards.includes("nine")|| playerCards.includes("one")&& playerCards.includes("four")&& playerCards.includes("seven")|| playerCards.includes("two")&& playerCards.includes("five")&& playerCards.includes("eight")
    || playerCards.includes("three")&& playerCards.includes("six")&& playerCards.includes("nine")){
        $("h2").text("⭐ Player "+ actualPlayer + " Wins! ⭐");

        setTimeout(function(){
            $(".btn").removeClass("circle");
            $(".btn").removeClass("cerca");
        },500)

    }else if(player1Cards.length + player2Cards.length === 9){
        $("h2").text("It's a tie! 😕");
        setTimeout(function(){
            $(".btn").removeClass("circle");
            $(".btn").removeClass("cerca");
        },500)

    }
    else if(actualPlayer===1){
        actualPlayer=2;
        $("h2").text("It´s player 2 turn!");
    }else{
        actualPlayer=1;
        $("h2").text("It´s player 1 turn!");
    }
}