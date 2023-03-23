import axios from 'axios'
import SimpleLightbox from 'simplelightbox'

/*let gallery = new simpleLightbox('.galleryWrapper a')

gallery.options('show.simplelightbox', () => {
    
})*/

let galleryWrapper = document.querySelector('.galleryWrapper')

let genereteGallery = (imgs) => { 
    genereteGallery.innerHTML = ''
    
    imgs.forEach((imgObj) =>{
        galleryWrapper.innerHTML += `
        <a href="http://localhost:4000/img/${imgObj.imgSrc}">
        <img class="gallery_small_img" src="http://localhost:4000/img/${imgObj.imgSrc}"
        </a>
        `

    })

    let gallery = new SimpleLightbox('.galleryWrapper a')

    gallery.on('show.simplelightbox', () => {
        
    }) 
}
let getImageApi = () => {
axios.get('http://localhost:4000/gallery/list')
.then((response) => {
    
    genereteGallery(response.data);
})
}

getImageApi()