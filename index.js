const navPane = document.querySelector('#nav-pane')
const root = document.querySelector('#root')
const navPaneQns = document.querySelector('#nav-pane-qns')
const navPaneButton = document.querySelector('#nav-pane-button')
const notifier = document.querySelector('#notifier')
const questionPane = document.querySelector('#question-pane')
const question = document.querySelector('#question')
const option1 = document.querySelector('#option1')
const option2 = document.querySelector('#option2')
const option3 = document.querySelector('#option3')
const option4 = document.querySelector('#option4')
const homeButton = document.querySelector('#home-button')
const instructionsButton = document.querySelector('#instructions-button')
const aboutButton = document.querySelector('#about-button')
const notifierClose = document.querySelector('#notifier-close')

let navPaneOpen = false
let notifierOpen = false

window.onload = evt => {
    console.log(document.body.offsetHeight, window.innerHeight)
    if(document.body.offsetHeight < window.innerHeight) {
        questionPane.style.height = window.innerHeight - document.querySelector('nav').offsetHeight - document.querySelector('footer').offsetHeight + 'px'
    }

    for(let i=0; i<15; i++){
        let qn = document.createElement('div')
        qn.className = 'qn_number'
        qn.id = 'qn_'+i
        qn.textContent = i+1
        navPane.appendChild(qn)
    }
}

navPaneButton.addEventListener('click', () => {
    if(navPaneOpen) {
        closeNavPane()        
    }
    else {
        openNavPane()
    }
})

function openNavPane(){
    navPaneQns.style.marginLeft = '0px'
    navPaneOpen = true
    navPaneButton.firstChild.className = 'fas fa-times'
    root.style.marginLeft = navPaneQns.offsetWidth + 'px'
}

function closeNavPane() {
    navPaneQns.style.marginLeft = -navPaneQns.offsetWidth + 'px'
    navPaneOpen = false
    navPaneButton.firstChild.className = 'fas fa-th'
    root.style.marginLeft = '0px'
}

instructionsButton.addEventListener('click', openNotifier)
notifierClose.addEventListener('click', closeNotifier)
homeButton.addEventListener('click', closeNotifier)
aboutButton.addEventListener('click', openNotifier)

function openNotifier() {
    notifier.style.marginTop = document.querySelector('nav').offsetHeight + 'px'
    notifierOpen = true
}

function closeNotifier() {
    notifier.style.marginTop = - notifier.offsetHeight + 'px'
    notifierOpen = false
}

let qn_No = 0

question.textContent = questions[qn_No].question
option1.textContent = questions[qn_No].options[0]
option2.textContent = questions[qn_No].options[1]
option3.textContent = questions[qn_No].options[2]
option4.textContent = questions[qn_No].options[3]