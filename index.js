function main(){
    const navPane = document.querySelector('#nav-pane')
    const root = document.querySelector('#root')
    const navPaneQns = document.querySelector('#nav-pane-qns')
    const navPaneButton = document.querySelector('#nav-pane-button')
    const questionPane = document.querySelector('#question-pane')
    const question = document.querySelector('#question')
    const option1 = document.querySelector('#option1')
    const option2 = document.querySelector('#option2')
    const option3 = document.querySelector('#option3')
    const option4 = document.querySelector('#option4')
    const homeButton = document.querySelector('#home-button')
    const instructionsButton = document.querySelector('#instructions-button')
    const aboutButton = document.querySelector('#about-button')
    const notifier = document.querySelector('#notifier')
    const notifierClose = document.querySelector('#notifier-close')
    const notifierContent = document.querySelector('#notifier-content')
    const questionCount = document.querySelector('#question-count')

    let NUMBER_OF_QUES = questions.length
    let NAV_PANE_OPEN = false
    let CURRENT_QUES = 1
    let score
    let IS_ANS_CORRECT = false

    questions.sort(() => {
        return Math.random() - 0.5
    })

    window.onload = evt => {
        console.log(document.body.offsetHeight, window.innerHeight)
        if(document.body.offsetHeight < window.innerHeight) {
            questionPane.style.height = window.innerHeight - document.querySelector('nav').offsetHeight - document.querySelector('footer').offsetHeight + 'px'
        }

        for(let i=0; i<NUMBER_OF_QUES; i++){
            let qn = document.createElement('div')
            qn.className = 'qn_number'
            qn.id = 'qn_'+i
            qn.textContent = i+1
            navPane.appendChild(qn)
        }

        showHome()
    }

    navPaneButton.addEventListener('click', () => {
        if(NAV_PANE_OPEN) {
            closeNavPane()        
        }
        else {
            openNavPane()
        }
    })

    function openNavPane(){
        navPaneQns.style.marginLeft = '0px'
        NAV_PANE_OPEN = true
        navPaneButton.firstChild.className = 'fas fa-times'
        root.style.marginLeft = navPaneQns.offsetWidth + 'px'
    }

    function closeNavPane() {
        navPaneQns.style.marginLeft = -navPaneQns.offsetWidth + 'px'
        NAV_PANE_OPEN = false
        navPaneButton.firstChild.className = 'fas fa-th'
        root.style.marginLeft = '0px'
    }

    instructionsButton.addEventListener('click', openNotifier)
    homeButton.addEventListener('click', openNotifier)
    aboutButton.addEventListener('click', openNotifier)
    notifierClose.addEventListener('click', closeNotifier)

    function openNotifier(evt) {
        notifier.style.marginTop = document.querySelector('nav').offsetHeight + 'px'
        notifierOpen = true

        if(evt.target === homeButton) {
            hideNotifierContent()
            showHome()
        }

        else if (evt.target === instructionsButton) {
            hideNotifierContent()
            showInstructions()
        }

        else if (evt.target === aboutButton) {
            hideNotifierContent()
            showAbout()
        }

        else {

        }
    }

    function closeNotifier() {
        notifier.style.marginTop = - notifier.offsetHeight + 'px'
        notifierOpen = false
        hideNotifierContent()
    }

    function showHome() {
        let home = document.createElement('div')
        home.innerHTML = "<h1 class='title'>COVID QUIZ</h1><div class='game-start button'>Start game</div>"
        notifierContent.appendChild(home)

        document.querySelector('.game-start').addEventListener('click', startQuiz)
    }

    function showInstructions() {
        let instructions = document.createElement('div')
        instructions.innerHTML = "<h1 class='title'>Instructions</h1><div class='instruct'></div>"

        notifierContent.appendChild(instructions)
    }

    function showAbout() {
        let about = document.createElement('div')
        about.innerHTML = "<h1 class='title'>About</h1><div class='about'></div>"

        notifierContent.appendChild(about)
    }

    function hideNotifierContent(){
        while(notifierContent.firstChild) {
            notifierContent.removeChild(notifierContent.firstChild)
        }
    }

    function startQuiz() {
        CURRENT_QUES = 0
        score = 0

        questions.sort(() => {
            return Math.random() - 0.5
        })

        addQuestion()
        closeNotifier()
    }

    function addQuestion(){
        option1.style.borderLeft = '4px solid rgb(240, 149, 12)'
        option2.style.borderLeft = '4px solid rgb(240, 149, 12)'
        option3.style.borderLeft = '4px solid rgb(240, 149, 12)'
        option4.style.borderLeft = '4px solid rgb(240, 149, 12)'

        question.textContent = questions[CURRENT_QUES].question
        option1.textContent = questions[CURRENT_QUES].options[0]
        option2.textContent = questions[CURRENT_QUES].options[1]
        option3.textContent = questions[CURRENT_QUES].options[2]
        option4.textContent = questions[CURRENT_QUES].options[3]
        questionCount.textContent = CURRENT_QUES+1+'/15'
        CURRENT_QUES++

        removeListenersFromOptions()
        addListenersToOptions()
    }

    function addListenersToOptions() {
        option1.addEventListener('click', checkAnswer)
        option2.addEventListener('click', checkAnswer)
        option3.addEventListener('click', checkAnswer)
        option4.addEventListener('click', checkAnswer)
    }

    function removeListenersFromOptions(){
        option1.removeEventListener('click', checkAnswer)
        option2.removeEventListener('click', checkAnswer)
        option3.removeEventListener('click', checkAnswer)
        option4.removeEventListener('click', checkAnswer)
    }

    function nextQues() {
        addQuestion()
        addListenersToOptions()
        closeNotifier()
    }

    function checkAnswer(evt) {
        if (questions[CURRENT_QUES-1].options[questions[CURRENT_QUES-1].answer] === evt.target.textContent){
            evt.target.style.borderLeft = '4px solid #22ff55'
            score++
            IS_ANS_CORRECT = true
        }
        else {
            IS_ANS_CORRECT = false
            evt.target.style.borderLeft = '4px solid #ff1111'

            if (questions[CURRENT_QUES - 1].answer == 0){
                option1.style.borderLeft = '4px solid #22ff55'
            }

            else if (questions[CURRENT_QUES - 1].answer == 1) {
                option2.style.borderLeft = '4px solid #22ff55'
            }

            else if (questions[CURRENT_QUES - 1].answer == 2) {
                option3.style.borderLeft = '4px solid #22ff55'
            }

            else if (questions[CURRENT_QUES - 1].answer == 3) {
                option4.style.borderLeft = '4px solid #22ff55'
            }
        }

        if (evt.target === option1) questions[CURRENT_QUES - 1].userInput = 0
        if (evt.target === option2) questions[CURRENT_QUES - 1].userInput = 1
        if (evt.target === option3) questions[CURRENT_QUES - 1].userInput = 2
        if (evt.target === option4) questions[CURRENT_QUES - 1].userInput = 3
        removeListenersFromOptions()

        setTimeout(showAnswer, 1000)
    }

    function showAnswer() {
        let explanationTitle = document.createElement('div')
        let explanation = document.createElement('div')
        let next = document.createElement('div')
        let img = document.createElement('img')
        
        if(IS_ANS_CORRECT){
            img.src = './img/success.gif'
        }
        else img.src = './img/failure.gif'

        img.height = '100'
        img.width = '100'
        img.align = 'center'

        explanationTitle.className = 'title'
        explanation.className = 'about'
        next.className = 'button'

        explanationTitle.textContent = 'Explanation'
        explanation.textContent = questions[CURRENT_QUES-1].explanation

        if (CURRENT_QUES == NUMBER_OF_QUES) {
            next.textContent = 'SHOW RESULT'
            next.addEventListener('click', showResult)
        }
        else {
            next.textContent = 'NEXT QUES'
            next.addEventListener('click', nextQues)
        }

        notifierContent.appendChild(img)
        notifierContent.appendChild(explanationTitle)
        notifierContent.appendChild(explanation)
        notifierContent.appendChild(next)

        openNotifier()
    }

    function showResult() {
        closeNotifier()

        let resultTitle = document.createElement('div')
        let result = document.createElement('div')
        let restart = document.createElement('div')

        resultTitle.className = 'title'
        result.className = 'about'
        restart.className = 'button'

        resultTitle.textContent = 'Results'
        result.textContent = 'You have scored '+score+' out of '+NUMBER_OF_QUES+'.'
        restart.textContent = 'REPLAY GAME'
        restart.addEventListener('click', () => {
            location.reload()
        })

        notifierContent.appendChild(resultTitle)
        notifierContent.appendChild(result)
        notifierContent.appendChild(restart)

        openNotifier()
    }
}

main()