const sliderImg = document.querySelector('#sliderImg')
const btns = {
    prev: document.querySelector('#btnPrev'),
    next: document.querySelector('#btnNext')
}

let imgNow = 0
let arrImg = ['family_3.webp', 'individual_2.webp','love_4.webp']

btns.prev.addEventListener('click', () => {
    if (imgNow === 0){
        imgNow = arrImg.length - 1
    } else {
        imgNow -= 1
    }
    sliderImg.src = `./img/example/${arrImg[imgNow]}`
})


btns.next.addEventListener ('click', () => {
    if (imgNow === arrImg.length - 1){
        imgNow = 0
    } else {
        imgNow += 1
    }
    sliderImg.src = `./img/example/${arrImg[imgNow]}`
})

setInterval(() => {
    if (imgNow === arrImg.length - 1){
        imgNow = 0
    } else {
        imgNow += 1
    }
    sliderImg.src = `./img/example/${arrImg[imgNow]}`
}, 5000)