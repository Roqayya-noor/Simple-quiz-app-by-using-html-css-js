const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");


const questions = [
    {
        question: "what is my favorite colour?",
        answers:[
            { text: "White", correct: false},
            { text: "Black", correct: false},
            { text: "Blue", correct: true},
            { text: "Green", correct: false},
        ]
    },
    {
        question: "what is my Dream country?",
        answers:[
            { text: "US", correct: false},
            { text: "India", correct: false},
            { text: "Pakistan", correct: false},
            { text: "Turkey", correct: true},
        ]
    },
    {
        question: "what is my favorite food?",
        answers:[
            { text: "Biryani", correct: false},
            { text: "Pizza", correct: false},
            { text: "Street food", correct: true},
            { text: "BBQ", correct: false},
        ]
    },
    {
        question: "what is my fav hobby?",
        answers:[
            { text: "Playing game", correct: false},
            { text: "Whatching series", correct: false},
            { text: "Irritating friends", correct: true},
            { text: "writing codes", correct: false},
        ]
    },
    {
         question: "which one is i am?",
        answers:[
            { text: "Thalassophile", correct: false},
            { text: "Hodophile", correct: true},
            { text: "Orophile", correct: false},
            { text: "Bibliophile", correct: false},
        ]
    },
    {
         question: "Am i morning person or  a night owl?",
        answers:[
            { text: "Morning person", correct: true},
            { text: "Night owl", correct: false},
            { text: "Both", correct: false},
            { text: "Depends on mood", correct: false},
        ]
    },
    {
         question: "Tea or Coffee?",
        answers:[
            { text: "Tea with 2 sugar", correct: false},
            { text: "Tea without sugar", correct: true},
            { text: "Black Coffee", correct: false},
            { text: "Cold Coffee", correct: false},
        ]
    },
    {
         question: "What do I do when i am bored?",
        answers:[
            { text: "Scrolling Tiktok", correct: false},
            { text: "Cooking", correct: true},
            { text: "Calls friends", correct: false},
            { text: "Play games", correct: false},
        ]
    },
    {
         question: "what is my biggest fear?",
        answers:[
            { text: "Heights", correct: false},
            { text: "Darkness", correct: false},
            { text: "Losing close Friends", correct: false},
            { text: "Insects", correct: true},
        ]
    },
    {
         question: "what's my worst habbit?",
        answers:[
            { text: "Taking too much", correct: false},
            { text: "Overthinking", correct: false},
            { text: "Silence", correct: true},
            { text: "Get angry soon", correct: false},
        ]
    },
     {
         question: "what's something i secretly obsessed with?",
        answers:[
            { text: "Whatching series", correct: false},
            { text: "Programming", correct: true},
            { text: "Todays trends", correct: false},
            { text: "Cars", correct: false},
        ]
    },
     {
         question: "what motivates me the most?",
        answers:[
            { text: "Money", correct: false},
            { text: "Family", correct: false},
            { text: "Proving ppls wrongs", correct: false},
            { text: "My Dreams", correct: true},
        ]
    },
     {
         question: "if i win 1 million ,whats the first things i will do?",
        answers:[
            { text: "Travel", correct: true},
            { text: "Buy Phone/Laptop", correct: false},
            { text: "Save it ", correct: false},
            { text: "Thrown party to friends", correct: false},
        ]
    },
     {
         question: "my Love languge is?",
        answers:[
            { text: "Time", correct: false},
            { text: "words", correct: true},
            { text: "Gifts", correct: false},
            { text: "Memes", correct: false},
        ]
    },
     {
         question: "My fav snaks?",
        answers:[
            { text: "chips", correct: false},
            { text: "choclates", correct: false},
            { text: "Ice Cream", correct: true},
            { text: "samosa", correct: false},
        ]
    },
     {
         question: "My most used app?",
        answers:[
            { text: "Instagram", correct: false},
            { text: "Whatsapp", correct: false},
            { text: "Youtube", correct: true},
            { text: "Games", correct: false},
        ]
    },
     {
         question: "My fav season?",
        answers:[
            { text: "Winter", correct: true},
            { text: "Spring", correct: false},
            { text: "Rain", correct: false},
            { text: "Summer", correct: false},
        ]
    },
     {
         question: "My idael date?",
        answers:[
            { text: "Food+Movie", correct: false},
            { text: "Long Drive", correct: true},
            { text: "Stay home", correct: false},
            { text: "Adventure", correct: false},
        ]
    },
     {
         question: "My Biggest Flex?",
        answers:[
            { text: "Friends", correct: false},
            { text: "Skills", correct: false},
            { text: "Nothing", correct: true},
            { text: "Confidence", correct: false},
        ]
    },
     {
         question: "First thing i will notice in ppls?",
        answers:[
            { text: "Eyes", correct: false},
            { text: "Smile", correct: false},
            { text: "Outfits", correct: false},
            { text: "Vibes", correct: true},
        ]
    }
];



let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
     score = 0;
     nextButton.innerHtml = "Next";
     showQuestion();
}

function showQuestion(){
     resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex +1;
    questionElement.innerHTML = questionNo + "." + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if(answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState(){
    nextButton.style.display = "none";
    while(answerButtons.firstChild){
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e){
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct ==="true";
    if(isCorrect){
        selectedBtn.classList.add("correct");
        score++;
    }else{
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true"){
            button.classList.add("correct");
        }
        button.disabled = true;

    });
nextButton.style.display = "block";
}

 function showScore(){
    resetState();
    questionElement.innerHTML = `you scored ${score} out of ${questions.length}!`;
    // nextButton.innerHTML = "Play Again";
    // nextButton.style.display = "block";
}

function handleNextButton(){
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length){
        showQuestion();
    }else{
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    }else{
        startQuiz();
    }
});

startQuiz();