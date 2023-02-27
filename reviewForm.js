let inputsForm = {
    name: document.querySelector('.inputName'),
    text: document.querySelector('.reviewText'),
}

let sentBtn = document.querySelector('.formSend')

let starsForm = document.querySelector('#starsForm')
let reviewForm = document.querySelector('.reviewForm')

let arrStars = []

let canChange = 1

let starsResult = 0

let setDefaultStarts = () => {
    for (let i = 0; i <= 4; i++) {
        arrStars.push({
            id:i,
            active: false
        })
    }
}

let setStars = (id) => {
 id = parseInt(id.substring(4))
 starsResult = id
 arrStars.forEach(star => {
    star.active = star.id <= id ? true : false
})
}

setDefaultStarts()

let renderStars = () => {
starsForm.innerHTML = null
    arrStars.forEach(star => {
        let idSymbol = star.active ? 'reviewFormStarsActive' : 'reviewFormStars'
        starsForm.innerHTML +=`  
        <svg id="star${star.id}" class="star">
        <use xlink:href="./img/ui.svg#${idSymbol}"></use>
      </svg>
      `
    })
}
renderStars() 

let handleMouseOver = (e) => {
    if (e.target.id) {
        if (canChange % 2 != 0) { 
        setStars(e.target.id);
        renderStars ()
    }
}
}

let handleClick = () => {
    canChange++
}

starsForm.addEventListener('mouseover', handleMouseOver)
starsForm.addEventListener('click', handleClick)

sentBtn.addEventListener('click', () => {
    let reviewItem = {
        name: inputsForm.name.value,
        text: inputsForm.text.value,
        stars: starsResult
    }
    console.log(reviewItem)
    reviewForm.innerHTML = `
    <p class="formTitle"> Дякуємо за ваш відгук, ${reviewItem.name}!</p>
    `
    })
