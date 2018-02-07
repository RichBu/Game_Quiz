
/*  Global variables  for Crystals Game  */

/* These are al of the scripts to control the 

    These are all the global variables used 
    throughout the game.  Placed in separate 
    file so that can find them there.

    Will probably only work with Hangman game
    the routines are all element id driven 

    */


const constWordLenMax = 20;

var configData = {
    lblTarget: "#lblTarget",
    lblCurrent: "#lblCurrent",
    lblLeft: "#lblLeft",
    lblNumStones: "#lblNumStones",
    imgDir: "assets/images/",
    imgQty: 4,
    imgFiles: ["cryBluHeart.png",
        "cryGoldRSqr.png",
        "cryPurRect.png",
        "cryRedOval.png"],
    name: ["Blue Heart",
        "Gold Square",
        "Purple Rectangle",
        "Red Oval"
    ],
    histQty: 5,  //how many history crystals to store
    //    color: [ rgb(43,79, 174)       ],
    //    colorNum: [ #2B4FAE, #FBBC18, #7D1C85, #A00019 ],
    colorName: ["Blue", "Gold", "Purple", "Red"],
    crystalRandMin: 1,
    crystalRandMax: 12,
    scoreRandMin: 19,
    scoreRandMax: 120,
    isShowButtonVal: false
};


//var configData =  configDataObj;

var crystal = {
    //    color: 0,
    imgName: "",
    fileName: "",
    htmlId: "",
    colorDraw: 0,
    colorName: "",
    currVal: 0,
    qtyPicked: 0,
    totVal: 0,
    cheatScore: 0,  //what val was when cheat bttn prs. stops score from jumping
    histDisplay: false;  //display if in the history stack


    init: function (configDataIn, index) {
        //initialize the values of the crystal
        //this[index].color = 0;
        this.imgName = "";
        this.fileName = "";
        this.htmlId = "";
        this.colorDraw = 0;
        this.colorName = "";
        this.currVal = 0;
        this.qtyPicked = 0;
        this.totVal = 0;
        this.cheatScore = 0;
        this.histDisplay = false;
        if (index <= configDataIn.imgFiles.length) {
            this.imgName = configDataIn.name[index];
            this.fileName = configDataIn.imgDir + configDataIn.imgFiles[index];
            this.name = configDataIn.name[index];
            //this.colorDraw = configDataIn.color[crysNumIn];
            this.colorName = configDataIn.colorName[index];
        };
    },

    pickRandVal: function (configDataIn) {
        var rangeVal = (configDataIn.crystalRandMax - configDataIn.crystalRandMin)
        this.currVal = Math.floor(Math.random() * rangeVal ) + configDataIn.crystalRandMin;
    },

    resetVal: function () {
        //rest the values 
        this.currVal = 0;
        this.qtyPicked = 0;
        this.totVal = 0;
        this.cheatScore = 0;
    },

    setCheatValue: function () {
        //sets the crystal value = 1 so can guarantee a win
        this.cheatScore = this.cheatScore + this.currVal - 1;
        if (this.cheatScore < 0) { this.cheatScore = 0; }
        this.currVal = 1;
    }
};


var allCrystals = [];
var histCrystals = [];  //history of which ones picked is shown at the top



var gameObj = {
    target: 0,
    score: 0,
    left: 0,
    numStones: 0,
    isGameOver: false,
    isGameLost: false,
    isGameWon: false,

    init: function () {
        this.target = 0;
        this.score = 0;
        this.left = 0;
        this.numStones = 0;
        this.isGameOver = false;
        this.isGameLost = false;
        this.isGameWon = false;
    },

    update: function (allCrystalsIn) {
        //will update all of the scores
        this.score = 0;
        this.numStones = 0;
        for (var i = 0; i < allCrystalsIn.length; i++) {
            //loop thru all the crystals and updata all the scores
            //so value doesn't "jump" after pressing cheat button
            var cheatScore = allCrystalsIn[i].cheatScore;
            this.numStones += allCrystalsIn[i].qtyPicked;
            allCrystalsIn[i].totVal = cheatScore + allCrystalsIn[i].qtyPicked * allCrystalsIn[i].currVal;
            this.score += allCrystalsIn[i].totVal;
        };
        this.left = this.target - this.score;
        if (this.left < 0) {
            this.isGameLost = true;
            this.isGameOver = true;
        };
        if (this.left === 0 && this.target > 0) {
            //game is over only if the target is not zero
            this.isGameWon = true;
            this.isGameOver = true;
        };
    },

    redraw: function (configDataIn) {
        //write to the display
        $(configDataIn.lblCurrent).text(this.score);
        $(configDataIn.lblLeft).text(this.left);
        $(configDataIn.lblNumStones).text(this.numStones);
        $(configDataIn.lblTarget).text(this.target);
    },

    pickRandVal: function (configDataIn) {
        this.target = Math.floor(Math.random() * (configDataIn.scoreRandMax - configDataIn.scoreRandMin))  + configDataIn.scoreRandMin;
        this.isGameLost = false;
        this.isGameOver = false;
        this.isGameWon = false;
    },

    displayWonLost: function (allCrystalsIn) {
        if (this.isGameWon) {
            modalOverWon.style.display = "block";
            var textOut = "You placed " + this.numStones + " crystals. ";
            textOut += "Crystal values from left to right are: " + allCrystalsIn[0].currVal + " " + allCrystalsIn[1].currVal + " " + allCrystalsIn[2].currVal + " " + allCrystalsIn[3].currVal;
            $("#modWonAnswer").text(textOut);
        } else if (this.isGameLost) {
            modalOverLost.style.display = "block";
            var textOut = "You placed " + this.numStones + " but you were over by " + (-1 * this.left) + " points. ";
            textOut += "Crystal values from left to right are: " + allCrystalsIn[0].currVal + " " + allCrystalsIn[1].currVal + " " + allCrystalsIn[2].currVal + " " + allCrystalsIn[3].currVal;
            $("#modLostAnswer").text(textOut);
        } else if (this.target === 0) {
            //game was never started
            modalGameBlank.style.display = "block";
        };
    }
};




var playObj = {
    //play object 
    //items associated with game play

    playState: 0,  //wat state is the game in


    init: function () {
        //reset the variables for play
        this.playState = 0;
    },

    startNewGame: function (configDataIn, allCrystalsIn) {
        //everything needed for a new game
        //loop thru all the crystals and set random values
        for (var i = 0; i < allCrystalsIn.length; i++) {
            allCrystalsIn[i].resetVal();
            allCrystalsIn[i].pickRandVal(configData);
        };
        gameObj.pickRandVal(configDataIn);
        gameObj.update(allCrystalsIn);
        gameObj.redraw(configDataIn);
    }
};

/*
var statsDisp = {

};

//all the settings for a gamw
var gameSettings = {

};
*/



