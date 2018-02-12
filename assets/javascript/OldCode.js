// storage of old code note used anywher.

// delete before the final release:


var selectString = "<select>";
var radioSelectString = "";

var radioButtonSelect_p1 = '<div class="radio">';
var radioButtonSelect_p2 = '<label><input type="radio" name="optradio" value="';
var radioButtonSelect_p3 = '">';
var radioButtonSelectTot = "";

answerPrompts.push(tempString);
tempString2 = '<option value="' + i + '">' + tempString + '</option>';
radioButtonSelectTot = radioButtonSelect_p1 + radioButtonSelect_p2;
radioButtonSelectTot += i + radioButtonSelect_p3;
radioButtonSelectTot += tempString + '</label></div>';
selectString = selectString + tempString2;
//radioSelectString = radioButtonSelect_p1 + radioButtonSelect_p2 + i;
HTMLstring += radioButtonSelectTot;

//HTMLstring = questionString + selectString + '</select>';
//HTMLstring = questionString + radioButtonSelectTot;
//$(configData.divQuestion).html( questionString );
// //second round            questionDiv.html(HTMLstring);

selectString += '</select>';


//to read from a select / input 
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


