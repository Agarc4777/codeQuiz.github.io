const startButton = document.getElementById("start-btn")
const questionContainerElement = document.getElementById("question-container")

const shuffledQuestions, currentQuestionIndex

startButton.addEventListener("click", startGame)

function startGame() {
    console.log('started')
    startButton.classList.add("hide")
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove("hide")
    setNextQuestion()
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    
}

function selectAnswer() {

}

const questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        answers: [
            { text: '<script>', correct: true},
            { text: '<javascript>', correct: false},
            { text: '<js>', correct: false},
            { text: '<scripting>', correct: false},
        ]
    }
]