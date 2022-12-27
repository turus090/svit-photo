let btnRecordToOrden = document.querySelector('#btnRecordToOrden')
btnRecordToOrden.addEventListener('click', ()=> {
    console.log(window.location)
    window.location.href = 'https://t.me/Kron2a'
})

let btnChat = document.querySelector('#btnChat')
btnChat.addEventListener('click', () => {
    window.location.href = 'https://www.instagram.com/svit_photo_lum/'

})

let lightbox = new SimpleLightbox('.gallery a', { /* options */ });