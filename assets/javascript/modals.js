
/*  Scripts for Quiz Game  */

/* These are al of the scripts to control the 

    modal pop-up windows withing the game  

    OLD ROUTINES copied from other games.  Therefore, not jQuery.
    will eventually convert to jQuery

    */

// prepare the modals
var modalHelp = document.getElementById('modHelp');
var modalHelp2 = document.getElementById('modHelp2');
var modalSettings = document.getElementById('modSettings');
var modalHiScores = document.getElementById('modHiScores');
var modalPlay = document.getElementById('modPlay');
var modalOverWon = document.getElementById('modOverWon');
var modalOverLost = document.getElementById('modOverLost');
var modalGameOver = document.getElementById('modGameOver');
var modalGameBlank = document.getElementById('modGameBlank');
var modalAnswerResult = document.getElementById('modAnswerResult');

// Get the button that opens the modal
var btnHelp = document.getElementById("btnHelp");
btnHelp.onclick = function () {
    modalHelp.style.display = "block";
}
var btnHelp2 = document.getElementById("btnHelp2");
//wants the technical details, but could only 
//get here by clicking button on the main help modal. So close the main modal
btnHelp2.onclick = function () {
    modalHelp2.style.display = "block";
}
var btnSettings = document.getElementById("btnSettings");
btnSettings.onclick = function () {
    modalSettings.style.display = "block";
}
var btnHiScores = document.getElementById("btnHiScores");
btnHiScores.onclick = function () {
    modalHiScores.style.display = "block";
}
var btnPlay = document.getElementById("btnPlay");
btnPlay.onclick = function () {
    modalPlay.style.display = "block";
}




// Get the <span> element that closes the modal
//var closeModHelp = document.getElementsByClassName("close")[0];
var closeModHelp = document.getElementById("closeModHelp");
var closeModHelp2 = document.getElementById("closeModHelp2");
var closeModSettings = document.getElementById("closeModSettings");
var closeModHiScores = document.getElementById("closeModHiScores");
var closeModPlay = document.getElementById("closeModPlay");
var closeModOverWon = document.getElementById("closeModOverWon");
var closeModOverLost = document.getElementById("closeModOverLost");
var closeModKeyDup = document.getElementById("closeModKeyDup");
var closeModGameOver = document.getElementById("closeModGameOver");
var closeModGameBlank = document.getElementById("closeModGameBlank");


// When the user clicks on <span> (x), close the modal
closeModHelp.onclick = function () {
    modalHelp.style.display = "none";
}
closeModHelp2.onclick = function () {
    modalHelp2.style.display = "none";
}
closeModSettings.onclick = function () {
    modalSettings.style.display = "none";
}
closeModHiScores.onclick = function () {
    modalHiScores.style.display = "none";
}
closeModPlay.onclick = function () {
    modalPlay.style.display = "none";
}

closeModOverWon.onclick = function () {
    modalOverWon.style.display = "none";
}

closeModOverLost.onclick = function () {
    modalOverLost.style.display = "none";
}

closeModGameOver.onclick = function () {
    modalGameOver.style.display = "none";
}

closeModGameBlank.onclick = function () {
    modalGameBlank.style.display = "none";
}


// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    //can NOT just mass close all modals because
    //on first open, modal closes right after opening
    //have to make sure the target is the modal
    //then knwo it's safe to close modal
    //replace with Case statement  in future
    if (event.target == modalHelp) {
        modalHelp.style.display = "none";
    }
    if (event.target == modalHelp2) {
        //might want to close both help windows
        modalHelp2.style.display = "none";
    }
    if (event.target == modalSettings) {
        modalSettings.style.display = "none";
    }
    if (event.target == modalHiScores) {
        modalHiScores.style.display = "none";
    }
    if (event.target == modalPlay) {
        modalPlay.style.display = "none";
    }
    if (event.target == modalOverWon) {
        modalOverWon.style.display = "none";
    }
    if (event.target == modalOverLost) {
        modalOverLost.style.display = "none";
    }
    if (event.target == modalGameOver) {
        modalGameOver.style.display = "none";
    }
    if (event.target == modalGameBlank) {
        modalGameBlank.style.display = "none";
    }

}

