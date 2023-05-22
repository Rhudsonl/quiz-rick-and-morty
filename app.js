const form = document.querySelector('form')
const result = document.querySelector('.result')
const percentageResult = result.querySelector('span')
const correctAnswers = ['B', 'C', 'A', 'A', 'A']



form.addEventListener('submit', event => {
    event.preventDefault()

   let score = 0

  const  userAnsewrs = [
    event.target.flexRadioDefault.value,
    event.target.flexRadioDefault2.value,
    event.target.flexRadioDefault3.value,
    event.target.flexRadioDefault4.value,
    event.target.flexRadioDefault5.value]

    userAnsewrs.forEach((answers, index) => {
        if (answers === correctAnswers[index]) {
            score += 20
        }
    })
    
    result.classList.remove('d-none')
    scrollTo({
        top: 0,
        left: 0
    })

   let counter = 0
     
     
     const time = setInterval(() => {
         percentageResult.textContent = `${counter}%`
         
         
         if(counter === score) {
             clearInterval(time)
             
            }
            counter++
        },30)
        
    
      
})


