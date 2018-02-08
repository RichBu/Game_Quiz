
/*  Global variables  for Quiz Game  */

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


var quizQuestArray = [];
//var tempArray = [];
//while( quizQuestArray.push( [] ) < 10 );


var singleQuestObj = {
    topicNum: 0,
    questImgSrc: "",        //image if "" then no image
    questPrompt: "",        //the actual question being asked
    isAnswersImg: false,    //are the answers images ?
    answersOptionLabels: [],       //A, B, C  or 1, 2, 3  or True / false
    answersPrompt: [],       //array of strings with all answers
    answersImgSrc: [],      //array of strings with all the source filenames
    correctAnswer: 0,       //what is the correct answer
    guessedTypedAnswer: "",  //if the user types in an answer
    pointQuest: 0,
    maxTimeToAnswer: 0        //how long to answer the questions
};


var quizPool = {  //all of the quizzes
    topics: [],                         //topic of quiz
    quesArray: [],                      //array of singleQuesObj
  
    //questions: [],                      //final struct is   [topic] [ "quest 1", "quest 2" ]
    //answers: [],                        // [topic] [quest #] [ "answer 1", "answer 2", "answer 3" ]
    topicNum: -1,
    questNum: 0,

    pushQuestion: function ( questArrayIn )  {
        //pushes a question into the question array
        this.questions.push( questArrayIn );
    },

    newTopic: function ( topicIn ) {
        //pushes a new topic in and then creates new arrays of arrays
        //this.questNum = 0;
        this.topics.push( topicIn );
        this.topicNum++;

        //this.questions.push( this.topicNum );
        //this.answers.push( this.topicNum ); 
    },

    pushFullQuestion: function( quesIn, answersIn ) {
        //this.questions
        this.questions.push( [ this.topicNum, this.questNum, quesIn ] );  //question
        //this.answers.push( questNum );
        this.answers.push( [this.topicNum,  this.questNum,  answersIn ] );   
        this.questNum++;
    }
};

singleQuestObj.topicNum = 0;
singleQuestObj.questImgSrc = "";        
singleQuestObj.questPrompt =  "What is a unit of measure for velocity";        
singleQuestObj.isAnswersImg = false;    
singleQuestObj.answersOptionLabels =  [];       
singleQuestObj.answersPrompt = ["m/sec^3", "miles^2/min", "RPM", "MPH"];       
singleQuestObj.answersImgSrc = [];      
singleQuestObj.correctAnswer =  3;       
singleQuestObj.guessedTypedAnswer = "";  
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;        


/*
quizPool.newTopic("Physics");
quizPool.pushFullQuestion( "What is a unit of measure for velocity", ["m/sec^3", "miles^2/min", "RPM", "MPH"] );
quizPool.pushFullQuestion( "Newtons Law can written as", ["F = m * a", "apples = oranges", "F = m * c^2", "E = MC^2"] );
quizPool.pushFullQuestion( "What is the acceleration of gravity on earth", ["32 ft / sec ^2",  "9.81 ft / sec ^2",  "9.81 m / sec ^2", "23.5 ft / sec ^2"] );

quizPool.newTopic("Star Wars");
quizPool.pushFullQuestion( "What year was the original Star Wars released", ["1981", "1979", "1980", "1977"] );
quizPool.pushFullQuestion( "What actor plays Luke Skywalker", ["George Harrison",  "Harrison Ford",  "Mark Hamill", "Jama Juice"] );
quizPool.pushFullQuestion( "How old was Harrison Ford in the original Star Wars", ["40", "35", "22", "25"] );
*/

/*
quizPool.pushFullQuestion( "", ["", "", "", ""] );




//Star wars questions
quizPool.pushQuestion(  
    ["What year was Star Wars released",
    "What actor plays Luke Skywalker",
    "How old was Harrison Ford in the original Star Wars",
    "How many Star Wars movies were made",
    "Who is Luke Skywalker dad"
] );

 */   


var questionObj = {
    questNum: 0,  //the question number, can also be the index
    questImgSrc: "",        //image if "" then no image
    questPrompt: "",        //the actual question being asked
    isAnswersImg: false,    //are the answers images ?
    answersOptionLabels: [],       //A, B, C  or 1, 2, 3  or True / false
    answersPrompt: [],       //array of strings with all answers
    answersImgSrc: [],      //array of strings with all the source filenames
    correctAnswer: 0,       //what is the correct answer
    guessedAnswer: 0,       //what the user guesses
    guessedTypedAnswer: "",  //if the user types in an answer
    isGuessCorrect: false,
    pointQuest: 0,          //points for this question
    pointsEarned: 0,
    timeToAnswer: 0,        //how long to answer the questions

    init: function () {
        this.questNum = 0;
        this.questImgSrc = "";
        this.questPrompt = "";
        this.isAnswersImg = false;
        this.answersOptionLabels = [];
        this.answersPrompt = [];       //array of strings with all answers
        this.answersImgSrc = [];      //array of strings with all the source filenames
        this.correctAnswer = 0;       //what is the correct answer
        this.guessedAnswer = -1;       //what the user guesseses ... index to answer.  -1 means did not answer
        this.guessedTypedAnswer = "";  //if the user types in an answer
        this.isGuessCorrect = false;
        this.pointQuest = 0;
        this.pointsEarned = 0;
        this.timeToAnswer = 0;        //how long to answer the questions
    },

    addQuest: function () {  //loads a questions to the array

    }
};


questionObj.init()


var playerObj = {
    name: "",
    initials: "",
    quizNum: 0,
    totCorrect: 0,
    totPoints: 0,
    timeForTest: 0,

    init: function () {
        this.name = "";
        this.initials = "";
        this.quizNum = 0;
        this.totCorrect = 0;
        this.totPoints = 0;
        this.timeForTest = 0;
    }
};


var histScoresObj = {
    player: playerObj,

    init: function () {

    }
}


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
    histDisplay: false,  //display if in the history stack


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
        this.currVal = Math.floor(Math.random() * rangeVal) + configDataIn.crystalRandMin;
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
        this.target = Math.floor(Math.random() * (configDataIn.scoreRandMax - configDataIn.scoreRandMin)) + configDataIn.scoreRandMin;
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



