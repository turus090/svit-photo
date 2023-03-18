import axios from 'axios'
import SimpleLightbox from 'simplelightbox'

/*let gallery = new simpleLightbox('.galleryWrapper a')

gallery.options('show.simplelightbox', () => {
    
})*/

let gallery = new document.querySelector('.galleryWrapper')
let genereteGallery = (imgs) => { 
imgs.forEach((imgObj) =>{

})
}
let getImageApi = () => {
axios.get('http://localhost:4000/gallery/list')
.then((response) => {
    console.log(response.data);
})
}

getImageApi()