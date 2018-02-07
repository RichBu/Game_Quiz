
/*  Scripts for Hangman Game  */

/* These are al of the scripts to control the 

    Play Modal and all the routines for playing a gamse  

    Will probably only work with Hangman game
    the routines are all element id driven 

    */

    var modalKeyDup = document.getElementById('modKeyDup');

    var btnNewGame = document.getElementById("btnNewGame");
    var btnSetCheat = document.getElementById("btnSetCheat");


    btnNewGame.onclick = function () {
        //starting a new game is in the playObj
        playObj.startNewGame( configData, allCrystals );
        modalPlay.style.display = "none";
    };

    btnSetCheat.onclick = function () {
        //starting a new game is in the playObj
        allCrystals[0].setCheatValue();
        modalSettings.style.display = "none";
    };


