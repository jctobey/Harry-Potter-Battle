var player = "";
var opponent = "";
var Harry = {
    //this is a key on an object, have to specify what object we're talking about (has to be included in the selector)
    FirstName: "Harry",
    LastName: "Potter",
    HP: 180,
    attackpower: 30,
    counterattackpower: 10,
    divlocation: ".harry",
    HPlocation:".HP-harry",
};

var Severus = {
    FirstName: "Severus",
    LastName: "Snape",
    HP: 120,
    attackpower: 10,
    counterattackpower: 10,
    divlocation: ".snape",
    HPlocation: ".HP-snape",
}

var Voldemort = {
    FirstName: "Voldemort",
    LastName: "",
    HP: 200,
    attackpower: 10,
    counterattackpower: 60,
    divlocation: ".voldemort",
    HPlocation:".HP-voldemort",
}

var Dolores = {
    FirstName: "Dolores",
    LastName: "Umbridge",
    HP: 100,
    attackpower: 10,
    counterattackpower: 10,
    divlocation: ".dolores",
    HPlocation:".HP-dolores",
}
charAvailable = [Harry, Severus, Voldemort, Dolores];

let initialize = () => {

    player = "";
    opponent = "";
    attackNum = 1;


    for (i = 0; i < charAvailable.length; i++) {
        myFunc(charAvailable[i]);


    }

};

function myFunc(char) {
    $(char.divlocation).append(char.FirstName + " " + char.LastName);
    $(char.HPlocation).append(" HP: "+char.HP);



}




$(document).ready(function () {
    initialize();
    /*
    let playerPicked = false
    let opponentPicked = false
    */

    $(".charAvail").click(function () {
        if ($(".player").html().trim() === "") { //if (!playerPicked) { playerPicked = true} else if (playerPicked && !oppponentPicked) {} else {} when you finish, set flags back to false
            $(this).appendTo(".player").removeClass('col-2').addClass('col-6');

            player = charAvailable[$(this).attr("id")]





        }
        else if( $(".opponent").html().trim() === "" ){
            $(this).appendTo(".opponent").removeClass('col-2').addClass('col-6');
            opponent = charAvailable[$(this).attr("id")];
            $(".attackbutton").show();
       } 
       
       else {
           $(".game-messages").text("Defeat this opponent before moving on to your next challenge!")
       }
       
    });

        

    $(".attackbutton" ).click(function() { //attackButton attack-button
        let remainingOppHP=opponent.HP-(player.attackpower*attackNum);
        let remainingPlayHP=player.HP-opponent.counterattackpower;
        opponent.HP = remainingOppHP;
        player.HP=remainingPlayHP;
        $(player.HPlocation).empty();
        $(player.HPlocation).append(" HP: "+remainingPlayHP);
        $(opponent.HPlocation).empty();
        $(opponent.HPlocation).append(" HP: "+remainingOppHP);
        if( (player.HP>0) && (opponent.HP>0)){
        $(".game-messages").text("You attacked for "+(player.attackpower*attackNum)+" damage. Your opponent now has "+remainingOppHP+" HP left. Your opponent attacked for "+opponent.counterattackpower+" damage. You now have "+remainingPlayHP+" HP left.")
        /*write this to the new div for HP*/
        console.log(remainingOppHP);
        console.log(remainingPlayHP);
        attackNum++;
        }
       else if( (player.HP<1) && (opponent.HP>0)) {
        $(".game-messages").text("You have died. Your ghost will roam the halls of Hogwarts for all eternity.");
        $(".attack-btn-wrapper").empty();
        setTimeout(function(){ location.reload(); }, 3000);
       }
       else if( (player.HP>0) && (opponent.HP<1) && $(".available").html().trim() !== "" ){
        $(".game-messages").text("You have vanquished this opponent! Select another opponent.");
        $(".opponent").empty();
       }
       else if( (player.HP>0) && (opponent.HP<1) && $(".available").html().trim() == "" ){
        $(".game-messages").text("You have vanquished all of the enemies in your path, and you now have power beyond your wildest dreams. The choice between using it for good or for evil is in your hands.");
        $(".opponent").empty();
        $(".attack-btn-wrapper").empty();
        setTimeout(function(){ location.reload(); }, 5000);
       }
       else if( (player.HP<1) && (opponent.HP<1)){
        $(".game-messages").text("You have vanquished your opponent, but you perished in the process. Wizards will honor your memory for years to come.");
        $(".attack-btn-wrapper").empty();
        setTimeout(function(){ location.reload(); }, 3000);
       }



    
    }) 
        
    /*THIS IS A GOOD IDEA
    run a for loop through the 'characters available' index once all the characters have been defeated?


    

        */

});




