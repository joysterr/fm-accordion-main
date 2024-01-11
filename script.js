const questionSection = document.querySelectorAll('.faq__question').forEach((question, index) => {
    question.addEventListener('click', () => {
        toggleFaqBtn(index)
        openAnswer(index)
    })
})

function openAnswer(index) {
    const faqAnswer = document.querySelectorAll('.faq__answer')
    faqAnswer[index].classList.toggle('hidden')
}

function toggleFaqBtn(index) {
    const faqBtn = document.querySelectorAll('.question__btn')
    faqBtn[index].classList.toggle('close-btn')
}