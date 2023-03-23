import axios from "axios"

let reviewContext = document.querySelector('#reviewContent');
let btnsReview = {
  prev: document.querySelector('#btnReviewPrev'),
  next: document.querySelector('#btnReviewNext'),
};

let dateFormatter = (dateInfo) => {
  let date = new Date(dateInfo)
  let formattedDateObj = {
    year: date.getFullYear(),
    month: date.getMonth(),
    day: date.getDate(),
    hours: date.getHours(),
    minutes: date.getMinutes()
  }
  if(formattedDateObj.month<10){
    formattedDateObj.month = `0${formattedDateObj.month}`
  } 
  if(formattedDateObj.day<10){
    formattedDateObj.day = `0${formattedDateObj.day}`
  }
  if (formattedDateObj.hours<10) {
    formattedDateObj.hours = `0${formattedDateObj.hours}`
  } if (formattedDateObj.minutes<10) {
    formattedDateObj.minutes = `0${formattedDateObj.minutes}`
}
return (
  `${formattedDateObj.hours}:${formattedDateObj.minutes} ${formattedDateObj.day}.${formattedDateObj.month}.${formattedDateObj.year}`)
  }

let startSlider = (reviews, isNew) => {
  let reviewNow = !isNew ? 0 : reviews.length-1;
  console.log(isNew, reviewNow)

const genereteReview = (reviewInfo) => {

  reviewContent.innerHTML = `
    <div class="upContent">
            <div class="upInfo">
              <p class="reviewName"> ${reviewInfo.name}</p>
              <p class="reviewDate"> ${dateFormatter(reviewInfo.dateCreated)}</p>
            </div>

            <div id="reviewStars" class="reviewStars"></div>
    </div>
          <p class="reviewText"> ${reviewInfo.text}</p>
          `
          let reviewStars = document.querySelector('#reviewStars')
          let starsHtml = ''
          for (let i = 1; i <=5; i++) {
            if (i <= reviewInfo.stars) {
                starsHtml += `<svg class="starIco">
                <use xlink:href="./img/ui.svg#reviewStarActive"></use>
              </svg>`
              } else {
                starsHtml += `<svg class="starIco">
                <use xlink:href="./img/ui.svg#reviewStar"></use>
              </svg>`
      
                }
            }   
            reviewStars.innerHTML = starsHtml
}

genereteReview(reviews[reviewNow])

btnsReview.prev.addEventListener('click', () => {
  if (reviewNow === 0) {
    reviewNow = reviews.length - 1;
  } else {
    reviewNow -= 1;
  }
  genereteReview(reviews[reviewNow]);
});

btnsReview.next.addEventListener('click', () => {
  if (reviewNow === reviews.length - 1) {
    reviewNow = 0;
  } else {
    reviewNow += 1;
  }
  genereteReview(reviews[reviewNow]);
})

}
export const getReviewAPI = (isNew = false) => {
axios.get('http://localhost:4000/review/list')
.then(res => {

startSlider(res.data, isNew)
})
}

getReviewAPI() 
