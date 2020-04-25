var start = document.getElementById("start")
var quiz = document.getElementById("quiz")
var question = document.getElementById("question")
var qImage = document.getElementById("qImage")
var choiceA = document.getElementById("A");
var choiceB = document.getElementById("B");
var choiceC = document.getElementById("C");
var counter = document.getElementById("counter")
var timeGauge = document.getElementById("timeGauge");
var progress = document.getElementById("progress");
var scoreDiv = document.getElementById("scoreContainer");


var questions = [
    {
        question : "Tanggal berapakah game di samping dirilis?",
        imgSrc : "image/1.jpg",
        choiceA : "03 April 2020",
        choiceB : "01 Januari 2019",
        choiceC : "17 Agustus 1945",
        correct : "A"
    },{
        question : "Siapa nama kuda yang di menemani karakter utama di game ini?",
        imgSrc : "image/2.jpg",
        choiceA : "teff",
        choiceB : "Agro",
        choiceC : "pown",
        correct : "B"
    },{
        question : "Siapakah nama Karakter di samping di game final fantasy 7 remake?",
        imgSrc : "image/3.jpg",
        choiceA : "Professor Hojo",
        choiceB : "Barret Wallace ",
        choiceC : "Aerith Gainsborough",
        correct : "C"
    },{
        question : "Siapakah nama Karakter di samping di game final fantasy 7 remake?",
        imgSrc : "image/4.jpg",
        choiceA : "Yuffie Kisaragi",
        choiceB : "Vincent Valentine",
        choiceC : "Tifa Lockhart",
        correct : "C"
    },{
        question : "Tanggal berapakah game ini pertama kali di rilis ?",
        imgSrc : "image/5.jpg",
        choiceA : "10 Desember 2015",
        choiceB : "03 Februari 2014",
        choiceC : "17 September 2013",
        correct : "C"
    },{
        question : "Tanggal berapakah game ini pertama kali di rilis ?",
        imgSrc : "image/6.jpg",
        choiceA : "29 July 2014",
        choiceB : "05 Juni 2010",
        choiceC : "12 Mei 2008",
        correct : "A"
    },{
        question : "Siapa nama karakter utama dari game disamping?",
        imgSrc : "image/9.jpg",
        choiceA : "Apollo",
        choiceB : "Ares",
        choiceC : "Kratos",
        correct : "C"
    },{
        question : "Salah satu HERO di game DOTA 2 ?",
        imgSrc : "image/8.jpg",
        choiceA : "Dark Willow",
        choiceB : "Drow Ranger",
        choiceC : "Windranger",
        correct : "B"
    },{
        question : "Siapakah yang di summon pada game final fantasy 7 Remake ?",
        imgSrc : "image/9.png",
        choiceA : "Shiva",
        choiceB : "Ifrit",
        choiceC : "Bahamut",
        correct : "B"
    },{
        question : "Siapakah Karakter utama dalam game di samping yang kita main kan?",
        imgSrc : "image/10.jpg",
        choiceA : "Lara Croft",
        choiceB : "Crimson Fire",
        choiceC : "Ana",
        correct : "A"
    }
];


var lastQuestion = questions.length -1
var runningQuestion =0
var count = 0
var questionTime = 10
var gaugeWidth =150
var gaugeUnit = gaugeWidth / questionTime
var TIMER
var score=0


function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]];
    }
    return a
};
shuffle(questions)

function renderQuestion(){
    var q = questions[runningQuestion];
    
    
    question.innerHTML = "<p>"+ q.question +"</p>";
    qImg.innerHTML = "<img src="+ q.imgSrc +">";
    choiceA.innerHTML = q.choiceA;
    choiceB.innerHTML = q.choiceB;
    choiceC.innerHTML = q.choiceC;
}

start.addEventListener("click",startQuiz);


function startQuiz(){
    start.style.display = "none";
    renderQuestion();
    quiz.style.display = "block";
    renderProgress();
    renderCounter();
    TIMER = setInterval(renderCounter,1000); 
}


function renderProgress(){
    for(var qIndex = 0; qIndex <= lastQuestion; qIndex++){
        progress.innerHTML += "<div class='prog' id="+ qIndex +"></div>";
    }
}



function renderCounter(){
    if(count <= questionTime){
        counter.innerHTML = count;
        timeGauge.style.width = count * gaugeUnit + "px";
        count++
    }else{
        count = 0;
      
        answerIsWrong();
        if(runningQuestion < lastQuestion){
            runningQuestion++;
            renderQuestion();
        }else{
           
            clearInterval(TIMER);
            scoreRender();
        }
    }
}



function checkAnswer(answer){
    if( answer == questions[runningQuestion].correct){
        
        score++;
      
        answerIsCorrect();
    }else{
       
        answerIsWrong();
    }
    count = 0;
    if(runningQuestion < lastQuestion){
        runningQuestion++;
        renderQuestion();
    }else{
    
        clearInterval(TIMER);
        scoreRender();
    }
}


function answerIsCorrect(){
    document.getElementById(runningQuestion).style.backgroundColor = "#0f0";
}


function answerIsWrong(){
    document.getElementById(runningQuestion).style.backgroundColor = "#f00";
}


function scoreRender(){
    scoreDiv.style.display = "block";
    
   
    var result = Math.round(100 * score/questions.length);
    
    
    var img = (result == 100) ? "image/1.gif" :
              (result >= 80) ? "image/2.gif" :
              (result >= 60) ? "https://media.giphy.com/media/cP5li7Un9Ua2OT7i9y/giphy.gif" :
              (result >= 40) ? "image/7.gif" : "image/6.gif"
    
              scoreDiv.innerHTML = "<img src="+ img +">";
    scoreDiv.innerHTML += "<p>"+ result  +"%</p>";
    document.body.children[2].style.display = "block"
}




var teks1=" Quiz Tebak Gambar ";
var speed=99;
var fress=null;
function jalan()
{ document.title=teks1;teks1=teks1.substring(1,teks1.length)+teks1.charAt(0);
fress=setTimeout("jalan()",speed);}

jalan()