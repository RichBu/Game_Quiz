
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
    lblNumCorrect: "#lblNumCorrect",
    lblNumBlank: "#lblNumBlank",
    lblNumWrong: "#lblNumWrong",
    lblTimeLeft: "#lblTimeLeft",
    bttnNextQuest: "btnNextQuestion",
    divQuestion: "#question",
    divAnswerResult: "#modAnswerDiv",
    divGameOverResult: "#modGameOverResults",
    imgDir: "assets/images/",
    iconGood: "icon-green-chk.png",    //what to display for a good answer  
    iconBad: "icon-red-x.png",      //what to display for a bad answer
    iconBlank: "icon-clock.png",   //if left blank
    histQty: 5,  //how many history  to store
    tmrAnswerResult: 5, //how long to display answer result
    tmrPerQuest: 10,
    tmrQuestTot: 250,  //only used if user selects isQuestTimerPerQuest = false
    isShowButtonVal: false,
    isQuestTimerPerQuest: true  //should it be tot tmer or per quest
};

var questTimer;
var resultTimer;


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

//Laid out in PSEUDO JSON style
//load question and topic manually for now,
//use JSON file in the future
quizPool.newTopic("Science");
singleQuestObj.topicNum = 0;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "What is a unit of measure for velocity";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["m/sec^3", "miles^2/min", "RPM", "MPH"];
singleQuestObj.answersImgSrc = ["", "", "", "ans_MPH.png"];
singleQuestObj.correctAnswer = 3;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);

singleQuestObj.topicNum = 0;
singleQuestObj.questImgSrc = "ans_carnation.png";
singleQuestObj.questPrompt = "What kind of flower is this";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["Lily", "Rose", "Carnation", "Sunflower"];
singleQuestObj.answersImgSrc = ["", "", "ans_carnation.png", ""];
singleQuestObj.correctAnswer = 2;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);
/*
singleQuestObj.topicNum = 0;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "Newtons Law can written as";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["F = m * a", "apples = oranges", "F = m * c^2", "E = MC^2"];
singleQuestObj.answersImgSrc = ["ans_Newton.png", "", "", ""];
singleQuestObj.correctAnswer = 0;
singleQuestObj.guessedTypedAnswer = "";
singleQuestObj.pointQuest = 1;
singleQuestObj.maxTimeToAnswer = 0;
singleQuestObj = quizPool.pushFullQuestion(singleQuestObj);
*/
singleQuestObj.topicNum = 0;
singleQuestObj.questImgSrc = "";
singleQuestObj.questPrompt = "What is the acceleration of gravity on earth";
singleQuestObj.isAnswersImg = false;
singleQuestObj.answersOptionLabels = [];
singleQuestObj.answersPrompt = ["32 ft / sec ^2", "9.81 ft / sec ^2", "9.81 m / sec ^3", "23.5 ft / sec ^2"];
singleQuestObj.answersImgSrc = ["ans_gravity.png", "", "", ""];
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
        isGuessWrong: false,
        isGuessBlank: false,
        pointsEarned: 0,
        timeCountStart: 0,      //what timer count started... used to calc elapsed time
        timeToAnswer: 0        //how long to answer the questions    
    },

    allQuestionsOnQuiz: [],  //all the questions on the quiz (an array) of fullQuestion

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
        this.init();  //clear out the array
        var numQuesInPool = quizPoolIn.quesArray.length;
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
            // find out if the question is an image question
            var imgQuestLink = questionObj.retImgLinkQuestion(questionNumIn);
            var imgQuestTag = $("<img/>");
            var isThereQuestImg;
            if ( imgQuestLink==="" || imgQuestLink===undefined ) {
                //link came back empty or error 
                isThereQuestImg = false;
            } else {
                //there is an image
                isThereQuestImg = true;
                $(imgQuestTag).attr("src", configData.imgDir + imgQuestLink);
                $(imgQuestTag).attr("width", 150);
                $(imgQuestTag).attr("height", 150);
            }
            var questionString = "<p><h2>" + questionObj.retQuestPrompt(questionNumIn) + " " + "</h2></p>";
            var selectString = "<select>";
            var radioSelectString = "";

            var radioButtonSelect_p1 = '<div class="radio">';
            var radioButtonSelect_p2 = '<label><input type="radio" name="optradio" value="';
            var radioButtonSelect_p3 = '">';
            var radioButtonSelectTot = "";

            var bttnTag;
            var HTMLstring = "";
            var answerPrompts = [];  //array of strings
            var answerHTMLprompts = [];
            var tempString = "";
            var tempString2 = "";
            var numberAnswers = this.allQuestionsOnQuiz[questionNumIn].questFromPool.answersPrompt.length;
            HTMLstring = questionString;
            for (var i = 0; i < numberAnswers; i++) {
                //get answers and put into an array
                bttnTag = $("<button>"); //get new button
                $(bttnTag).attr("data-answer",i); //adds button # to button

                tempString = this.retAnswerChoiceString(questionNumIn, i);
                $(bttnTag).text(tempString);
                /*
                answerPrompts.push(tempString);
                tempString2 = '<option value="' + i + '">' + tempString + '</option>';
                radioButtonSelectTot = radioButtonSelect_p1 + radioButtonSelect_p2;
                radioButtonSelectTot += i + radioButtonSelect_p3;
                radioButtonSelectTot += tempString + '</label></div>';
                selectString = selectString + tempString2;
                //radioSelectString = radioButtonSelect_p1 + radioButtonSelect_p2 + i;
                HTMLstring += radioButtonSelectTot;
                */
            };
            selectString += '</select>';
            //HTMLstring = questionString + selectString + '</select>';
            //HTMLstring = questionString + radioButtonSelectTot;
            //$(configData.divQuestion).html( questionString );
            questionDiv.html(HTMLstring);
            if (isThereQuestImg ) { $(imgQuestTag).prependTo( questionDiv ); };
        };
    },

    evaluateQuestion: function (questNumToEval) {
        //evaluates a function whether or not it is good / bad
        //writes to gameObj
        var qNum = questNumToEval;  //use short hand var here
        this.allQuestionsOnQuiz[qNum].isGuessBlank = false;
        this.allQuestionsOnQuiz[qNum].isGuessCorrect = false;
        this.allQuestionsOnQuiz[qNum].isGuessWrong = false;
        //move from gameObj ro permanent storage on question
        var usrAnswer = parseInt(gameObj.whichAnswerPicked());
        this.allQuestionsOnQuiz[qNum].guessedAnswer = usrAnswer;

        if (usrAnswer === -1) {
            //it was a blank answer
            this.allQuestionsOnQuiz[qNum].isGuessBlank = true;
            gameObj.questionBlank++;
        } else if (parseInt(this.allQuestionsOnQuiz[qNum].questFromPool.correctAnswer) === usrAnswer) {
            //this is a correct answer, so up the wins
            this.allQuestionsOnQuiz[qNum].isGuessCorrect = true;
            gameObj.questionCorrect++;
            this.allQuestionsOnQuiz[qNum].pointsEarned = this.allQuestionsOnQuiz[qNum].pointQuest;
        } else {
            this.allQuestionsOnQuiz[qNum].isGuessWrong = true;
            gameObj.questionWrong++;
        };
    },

    retQuestPrompt: function (questNum) {
        //returns the question asked
        var outVal = "";
        outVal = this.allQuestionsOnQuiz[questNum].questFromPool.questPrompt;
        return outVal;
    },


    retAnswerChoiceString: function (quesNum, choiceNum) {
        var outVal = "";
        outVal = this.allQuestionsOnQuiz[quesNum].questFromPool.answersPrompt[choiceNum];
        return outVal;
    },

    retQuestUserAnswerString: function (questNum) {
        //returns what the user picked in string format
        var outVal = "";
        var numAnsGuess = questionObj.allQuestionsOnQuiz[questNum].guessedAnswer;
        outVal = this.retAnswerChoiceString(questNum, numAnsGuess);
        //questionObj.allQuestionsOnQuiz[questNum].questFromPool.answersPrompt[numAnsGuess];
        return outVal;
    },


    retQuestCorrectAnswerNum: function (questNum) {
        //reutrns the answer's number
        var outVal = 0;
        outVal = questionObj.allQuestionsOnQuiz[questNum].questFromPool.correctAnswer;
        return outVal;
    },

    retQuestCorrectAnswerString: function (questNum) {
        //returns the correct answer to a question in string format
        var outVal = "";
        var numCorrAns = this.retQuestCorrectAnswerNum(questNum);
        outVal = this.retAnswerChoiceString(questNum, numCorrAns);
        return outVal;
    },

    retImgLinkQuestion: function (questNum) {
        //returns a string to the image associated with the question
        var outVal = "";
        outVal = questionObj.allQuestionsOnQuiz[questNum].questFromPool.questImgSrc;
        return outVal;
    },

    retImgLinkAnswer: function (questNum, choiceNum) {
        //returns a string to the image associated with the question
        var outVal = "";
        if (questionObj.allQuestionsOnQuiz[questNum].questFromPool.answersImgSrc.length >= 0) {
            //there is at least one image src files
            var ansChoiceNum = this.retQuestCorrectAnswerNum(questNum);
            outVal = questionObj.allQuestionsOnQuiz[questNum].questFromPool.answersImgSrc[choiceNum];
        } else {
            outVal = "";
        };
        return outVal;
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
    questionCorrect: 0,
    questionWrong: 0,
    questionBlank: 0,
    tmrQuestCount: 0,
    tmrAnswerCount: 0,

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
        this.questionCorrect = 0;
        this.questionWrong = 0;
        this.questionBlank = 0;
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
        } else {
            //not just starting up so write to the display
            var questLeft = questionObj.allQuestionsOnQuiz.length - this.questionNum - 1;
            $(configData.lblQuestLeft).text(questLeft);
            $(configData.lblNumCorrect).text(this.questionCorrect);
            $(configData.lblNumWrong).text(this.questionWrong);
            $(configData.lblQuestNum).text(this.questionNum + 1);
            $(configData.lblNumBlank).text(this.questionBlank);
            $(configData.lblTimeLeft).text(this.tmrQuestCount);
        };
    },

    gameObjNewGame: function () {
        this.isGameLost = false;
        this.isGameOver = false;
        this.isGameWon = false;
        this.isGameStartup = false;
        this.questionCorrect = 0;
        this.questionWrong = 0;
        this.questionBlank = 0;
        this.tmrAnswerCount = configData.tmrPerQuest;
        this.tmrAnswerResult = configData.tmrAnswerCount;
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

    displayRightWrong: function (questNumIn) {
        //routine to displau right or wrong and time out
        //incoming hideModal is boolean and if true means hide
        //dispType: 0=hide modal  1=left blank  2=correct  3=wrong
        var dispType = gameObj.convertToDispType(questNumIn);
        var questionDiv = $(configData.divQuestion);
        $(questionDiv).html("");
        if (dispType === 0) {
            modalAnswerResult.style.display = "hide";
        } else {
            //display generic modal and pump the values in
            var modAnswerDiv = $(configData.divAnswerResult);
            var iconTag = $("<img/>");
            var resultImgTag = $("<img/>");
            var tagToPlace = $("<p>");
            modalAnswerResult.style.display = "block";
            $(modAnswerDiv).html("");

            var strCorrAns = questionObj.retQuestCorrectAnswerString(questNumIn);
            var strAnsGuess = questionObj.retQuestUserAnswerString(questNumIn);
            var resultImgSrc = questionObj.retImgLinkAnswer(questNumIn, questionObj.retQuestCorrectAnswerNum(questNumIn));
            console.log(resultImgSrc);
            var isThereResultImg = false;
            if (resultImgSrc === "" || resultImgSrc===undefined) {
                isThereResultImg = false;
            } else {
                isThereResultImg = true;
                $(resultImgTag).attr("src", configData.imgDir + resultImgSrc);
                $(resultImgTag).attr("width", 100);
                $(resultImgTag).attr("height", 100);
            };

            //now figure out which one to display
            switch (dispType) {
                case 1:
                    //left it blank
                    $(iconTag).attr("src", configData.imgDir + configData.iconBlank);
                    $("<h3>Left Answer Blank</h3>").appendTo(tagToPlace);
                    $("<h4><br/>You should at least take a guess</h4>").appendTo(tagToPlace);
                    $("<h4>Answer was : " + strCorrAns + "</h4>").appendTo(tagToPlace);
                    break;
                case 2:
                    //correct answer
                    $(iconTag).attr("src", configData.imgDir + configData.iconGood);
                    $("<h3>Correct Answer</h3>").appendTo(tagToPlace);
                    $("<h4>Answer was : " + strCorrAns + "</h4>").appendTo(tagToPlace);
                    break;
                case 3:
                    //wrong answer
                    $(iconTag).attr("src", configData.imgDir + configData.iconBad);
                    $("<h3>Wrong Answer</h3>").appendTo(tagToPlace);
                    $("<h4><br/>You guessed : " + strAnsGuess + "</h4>").appendTo(tagToPlace);
                    $("<h4>Sorry correct answer was : " + strCorrAns + "</h4>").appendTo(tagToPlace);
                    break;
            };
            $(iconTag).attr("width", 40);
            $(iconTag).attr("height", 40);
            $(iconTag).appendTo(modAnswerDiv);     //icon for the page
            $(tagToPlace).appendTo(modAnswerDiv);   //text on the page
            if (isThereResultImg) {
                $(resultImgTag).appendTo(modAnswerDiv);     //if there was an image
            };
        };
    },

    convertToDispType: function (questNum) {
        //convert all the flags to a single integer value
        var outInt = 0;
        var i = 0;
        outInt = (i = questionObj.allQuestionsOnQuiz[questNum].isGuessBlank ? 1 : 0) * 1;
        outInt += (i = questionObj.allQuestionsOnQuiz[questNum].isGuessCorrect ? 1 : 0) * 2;
        outInt += (i = questionObj.allQuestionsOnQuiz[questNum].isGuessWrong ? 1 : 0) * 3;
        return outInt;
    },

    nextQuestion: function () {
        //incrment question # and then display the screen
        //questionObj.evaluateQuestion(this.questionNum);
        //gameObj.displayRightWrong(this.questionNum);
        if (gameObj.isGameStartup) {
            //gameObj.redraw();
            modalGameBlank.style.display = "block";
        } else if (!gameObj.isGameOver) {
            if (this.questionNum >= questionObj.allQuestionsOnQuiz.length - 1) {
                //the game is over
                this.isGameOver = true;
                //this.questionNum = 0;
                modalGameOver.style.display = "block";
                var divGameOverResult = $(configData.divGameOverResult);
                $(divGameOverResult).html("");
                var pTagAdd = $("<P>");
                $("<h4>Your results:</h4>").appendTo(pTagAdd);
                $("<h4>number correct = " + gameObj.questionCorrect + "</h4>").appendTo(pTagAdd);
                $("<h4>number wrong = " + gameObj.questionWrong + "</h4>").appendTo(pTagAdd);
                $("<h4>number blank = " + gameObj.questionBlank + "</h4>").appendTo(pTagAdd);
                $(pTagAdd).appendTo(divGameOverResult);
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

    whichAnswerPicked: function () {
        //command to find which radio button was pressed
        //all elements need a type = "radio"
        //should be jQuery, change later working now
        document.getElementById('question').scrollIntoView();
        var bttnAnswer = $("input[type=radio]:checked").val();
        console.log("button pressed = " + bttnAnswer);
        if (bttnAnswer === undefined) {
            bttnAnswer = -1;   //-1 means a blank press
        };
        return bttnAnswer;
    }

};




var playObj = {
    //play object 
    //items associated with game play
    //probably don't need and will eliminate in future !!!

    playState: 0,  //wat state is the game in


    init: function () {
        //reset the variables for play
        this.playState = 0;
    },

    startNewGame: function (configDataIn) {
        //everything needed for a new game
        gameObj.gameObjNewGame();
        var pickSubject = prompt("Have not finished with selection for subject area.\nSo have to use prompt\n\nWhich subject:  0=Physics 1=Star Wars");
        var subjectPicked = parseInt(pickSubject);
        questionObj.addAllQuestFromPool(quizPool, subjectPicked);
        gameObj.isGameStartup = false;
        gameObj.questionNum = 0;  //question not loaded
    }
};




