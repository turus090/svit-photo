import axios from "axios"

const sliderImg = document.querySelector('#sliderImg')
const btns = {
    prev: document.querySelector('#btnPrev'),
    next: document.querySelector('#btnNext')
}

let imgNow = 0
let startSlider = (arrImg) => {
    btns.prev.addEventListener('click', () => {
        if (imgNow === 0){
            imgNow = arrImg.length - 1
        } else {
            imgNow -= 1
        }
        sliderImg.src = `http://localhost:4000/img/${arrImg[imgNow]}`
    })
    
    
    btns.next.addEventListener ('click', () => {
        if (imgNow === arrImg.length - 1){
            imgNow = 0
        } else {
            imgNow += 1
        }
        sliderImg.src = `http://localhost:4000/img/${arrImg[imgNow]}`
    })
    
    setInterval(() => {
        if (imgNow === arrImg.length - 1){
            imgNow = 0
        } else {
            imgNow += 1
        }
        sliderImg.src = `http://localhost:4000/img/${arrImg[imgNow]}`
    }, 5000)
}



let getImageApi = () => {
    axios.get('http://localhost:4000/gallery/list')
    .then((res) => {
        let imgStore = [] 
        res.data.forEach (el => {
            imgStore.push(el.imgSrc)
        })
        startSlider(imgStore)
    })
}

    getImageApi()