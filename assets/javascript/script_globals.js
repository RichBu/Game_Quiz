
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
    lblQuestNum: "#lblQuestNum",
    lblQuestLeft: "#lblQuestLeft",
    lblLeft: "#lblLeft",
    lblNumStones: "#lblNumStones",
    bttnNextQuest: "btnNextQuestion",
    divQuestion: "#question",
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
    histQty: 5,  //how many history  to store
    //    color: [ rgb(43,79, 174)       ],
    //    colorNum: [ #2B4FAE, #FBBC18, #7D1C85, #A00019 ],
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

    topicNum: -1,
    questNum: 0,

    newTopic: function (topicIn) {
        //pushes a new topic in and then creates new arrays of arrays
        this.topics.push(topicIn);
        this.topicNum++;
    },

    pushFullQuestion: function (singleQuestIn) {
        //this.questions
        singleQuestIn.topicNum = this.topicNum;
        this.quesArray.push(singleQuestIn);
        var outObj = jQuery.extend(true, {}, singleQuestIn);
        this.questNum++;
        return outObj;
    }
};


//load question and topic manually for now,
//use JSON file in the future
quizPool.newTopic("Physics");
singleQuestObj.topicNum = 0;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "What is a unit of measure for velocity";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["m/sec^3", "miles^2/min", "RPM", "MPH"];
singleQuestObj.answersImgSrc = [];
singleQuestObj.correctAnswer = 3;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);

singleQuestObj.topicNum = 0;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "Newtons Law can written as";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["F = m * a", "apples = oranges", "F = m * c^2", "E = MC^2"];
singleQuestObj.answersImgSrc = [];
singleQuestObj.correctAnswer = 0;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);

singleQuestObj.topicNum = 0;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "What is the acceleration of gravity on earth";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["32 ft / sec ^2", "9.81 ft / sec ^2", "9.81 m / sec ^2", "23.5 ft / sec ^2"];
singleQuestObj.answersImgSrc = [];
singleQuestObj.correctAnswer = 0;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);


quizPool.newTopic("Star Wars");
singleQuestObj.topicNum = 1;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "What year was the original Star Wars released";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["1981", "1979", "1980", "1977"];
singleQuestObj.answersImgSrc = [];
singleQuestObj.correctAnswer = 3;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);

singleQuestObj.topicNum = 1;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "What actor plays Luke Skywalker";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["George Harrison", "Harrison Ford", "Mark Hamill", "Jama Juice"];
singleQuestObj.answersImgSrc = [];
singleQuestObj.correctAnswer = 2;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);

singleQuestObj.topicNum = 1;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "How old was Harrison Ford in the original Star Wars";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["40", "35", "22", "25"];
singleQuestObj.answersImgSrc = [];
singleQuestObj.correctAnswer = 3;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);

singleQuestObj.topicNum = 1;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "Who is Luke Skywalkers dad";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["Relo", "Dark Vader", "The Emperor", "Fr. Timothy"];
singleQuestObj.answersImgSrc = [];
singleQuestObj.correctAnswer = 1;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);


var questionObj = {
    questNum: 0,  //the question number, can also be the index
    fullQuestion: {  //question used for test is one pulled from pool + extra elements
        questFromPool: singleQuestObj,   //object pulled from pool
        guessedAnswer: 0,       //what the user guesses
        guessedTypedAnswer: "",  //if the user types in an answer
        isGuessCorrect: false,
        pointsEarned: 0,
        timeToAnswer: 0        //how long to answer the questions    
    },

    allQuestionsOnQuiz: [],  //all the questions on the quiz (an array) of questionObj

    init: function () {   //clear out all the questions
        var endVal = this.allQuestionsOnQuiz.length;
        for (var i = 0; i < endVal; i++) {
            //there are current questions loaded, so need to pop them off
            this.allQuestionsOnQuiz.pop();
        };
    },

    initFullQuestion: function (fullQuestionIn) {
        fullQuestionIn.guessedAnswer = 0;
        fullQuestionIn.guessedTypedAnswer = "";
        fullQuestionIn.isGuessCorrect = false;
        fullQuestionIn.pointsEarned = 0;
        fullQuestionIn.timeToAnswer = 0;
        return fullQuestionIn;
    },

    addAllQuestFromPool: function (quizPoolIn, topicNumIn) {  //loads a questions to the array from 
        //quizPoolIn is a quizPool object
        console.log("in loop");
        this.init();  //clear out the array
        var numQuesInPool = quizPoolIn.quesArray.length;
        console.log("num ques = " + numQuesInPool);
        for (var i = 0; i < numQuesInPool; i++) {
            //take singleQuesObj from array and use for compare and pushin
            var singleQuestObjFromPool = jQuery.extend(true, {}, quizPoolIn.quesArray[i]);
            if (singleQuestObjFromPool.topicNum === topicNumIn) {
                //topicNum matches, so need to clone a copy then push to array
                this.initFullQuestion(this.fullQuestion);
                this.fullQuestion.questFromPool = jQuery.extend(true, {}, singleQuestObjFromPool);
                this.allQuestionsOnQuiz.push(jQuery.extend(true, {}, this.fullQuestion));
            };
        };
    },

    displayQuestion: function () {
        //displays the question on the HTML page
        //only if not game over 
        if (!gameObj.isGameOver && !gameObj.isGameStartup) {
            var questionNumIn = gameObj.questionNum;
            var questionDiv = $(configData.divQuestion);
            var questionString = "<p><h2>" + this.allQuestionsOnQuiz[questionNumIn].questFromPool.questPrompt + " " + "</h2></p>";
            var selectString = "<select>";
            var raddioSelectString = "";

            var radioButtonSelect_p1 = '<div class="radio">';
            var radioButtonSelect_p2 = '<label><input type="radio" name="optradio" value="';
            var radioButtonSelect_p3 = '">';
            var radioButtonSelectTot = "";

            var HTMLstring = "";
            var answerPrompts = [];  //array of strings
            var answerHTMLprompts = [];
            var tempString = "";
            var tempString2 = "";
            var numberAnswers = this.allQuestionsOnQuiz[questionNumIn].questFromPool.answersPrompt.length;
            HTMLstring = questionString;
            for (var i = 0; i < numberAnswers; i++) {
                //get answers and put into an array
                tempString = this.allQuestionsOnQuiz[questionNumIn].questFromPool.answersPrompt[i];
                answerPrompts.push(tempString);
                tempString2 = '<option value="' + i + '">' + tempString + '</option>';
                radioButtonSelectTot = radioButtonSelect_p1 + radioButtonSelect_p2;
                radioButtonSelectTot += i + radioButtonSelect_p3;
                radioButtonSelectTot += tempString + '</label></div>';
                selectString = selectString + tempString2;
                //raddioSelectString = radioButtonSelect_p1 + radioButtonSelect_p2 + i;
                HTMLstring += radioButtonSelectTot;
            };
            selectString += '</select>';
            //HTMLstring = questionString + selectString + '</select>';
            //HTMLstring = questionString + radioButtonSelectTot;
            //$(configData.divQuestion).html( questionString );
            questionDiv.html(HTMLstring);
        };
    }
};



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
    //will store historical data for 
    //not just high / low scores but also which questions missed
    player: playerObj,

    init: function () {

    }
}


//var configData =  configDataObj;



var gameObj = {
    target: 0,
    score: 0,
    left: 0,
    numStones: 0,
    isGameOver: false,
    isGameLost: false,
    isGameWon: false,
    isGameStartup: true,
    questionNum: 0,

    init: function () {
        this.target = 0;
        this.score = 0;
        this.left = 0;
        this.numStones = 0;
        this.isGameOver = false;
        this.isGameLost = false;
        this.isGameWon = false;
        this.isGameStartup = true;
        this.questionNum = 0;
    },

    update: function () {
        //will update all of the scores
        /*
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
        */
    },

    redraw: function () {
        if (this.isGameStartup) {
            //game just started up
            var questionDiv = $(configData.divQuestion);
            //questionDiv.empty();
            var htmlString = "<p><h4>" + "Quiz Demonstration" + " " + "</h4></p>";
            htmlString += "<p><h4>" + "To start a new game, pick the PLAY button</p><p>and then you can select the category of the game and click the NEW GAME button" + " " + "</h4></p>";
            questionDiv.html(htmlString);
        };
        //write to the display
        var questLeft = questionObj.allQuestionsOnQuiz.length - this.questionNum;
        console.log( questLeft );
        $(configData.lblQuestLeft).text( questLeft );
        $(configData.lblLeft).text(this.left);
        $(configData.lblNumStones).text(this.numStones);
        $(configData.lblQuestNum).text(this.questionNum);
    },

    gameObjNewGame: function () {
        this.isGameLost = false;
        this.isGameOver = false;
        this.isGameWon = false;
        this.isGameStartup = false;
    },

    displayWonLost: function () {
        if (this.isGameWon) {
            modalOverWon.style.display = "block";
            var textOut = "";
            $("#modWonAnswer").text(textOut);
        } else if (this.isGameLost) {
            modalOverLost.style.display = "block";
            var testOut = "";
            $("#modLostAnswer").text(textOut);
        } else if (this.target === 0) {
            //game was never started
            modalGameBlank.style.display = "block";
        };
    },

    nextQuestion: function () {
        //incrment question # and then display the screen
        this.whichAnswerPicked();
        if (gameObj.isGameStartup) {
            //gameObj.redraw();
            modalGameBlank.style.display = "block";
        } else if (!gameObj.isGameOver) {
            if (this.questionNum >= questionObj.allQuestionsOnQuiz.length - 1) {
                //the game is over
                this.isGameOver = true;
                //this.questionNum = 0;
                modalGameOver.style.display = "block";
            } else {
                this.questionNum++;
                gameObj.redraw();
                questionObj.displayQuestion();
            };
        } else {
            //game is over so put message back up
            gameObj.redraw();
            modalGameOver.style.display = "block";
        };
    },

    whichAnswerPicked: function( ) {
        //command to find which radio button was pressed
        //all elements need a type = "radio"
        //should be jQuery, change later working now
        document.getElementById('question').scrollIntoView();
        var bttnAnswer = $("input[type=radio]:checked").val();
        console.log( "button pressed = " + bttnAnswer );
        return bttnAnswer;
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

    startNewGame: function (configDataIn) {
        //everything needed for a new game
        var pickSubject = prompt("Have not finished with selection for subject area.\nSo have to use prompt\n\nWhich subject:  0=Physics 1=Star Wars");
        var subjectPicked = parseInt(pickSubject);
        questionObj.addAllQuestFromPool(quizPool, subjectPicked);
        gameObj.isGameStartup = false;
        questionObj.displayQuestion();
        gameObj.gameObjNewGame();
        gameObj.update();
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



