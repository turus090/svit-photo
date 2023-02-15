let reviewContext = document.querySelector('#reviewContent');
let btnsReview = {
  prev: document.querySelector('#btnReviewPrev'),
  next: document.querySelector('#btnReviewNext'),
};

let reviews = [
  {
    name: 'John Smith',
    date: '02.05.1990',
    rating: 4,
    text: 'dgdfgdfgfdgfdgdfgdfgdf',
  },
  {
    name: 'Smith',
    date: '02.07.1980',
    rating: 3,
    text: 'dlorsdfsd kkkkkkkkkkkf',
  },
  {
    name: 'MAx Pain',
    date: '02.11.2010',
    rating: 5,
    text: 'dgdfg dfgfdgf dgdfg dfgdf',
  },
];

let reviewNow = 0;


const genereteReview = (reviewInfo) => {
  reviewContent.innerHTML = `
    <div class="upContent">
            <div class="upInfo">
              <p class="reviewName"> ${reviewInfo.name}</p>
              <p class="reviewDate"> ${reviewInfo.date}</p>
            </div>

            <div id="reviewStars" class="reviewStars"></div>
    </div>
          <p class="reviewText"> ${reviewInfo.text}</p>
          `
          let reviewStars = document.querySelector('#reviewStars')
          let starsHtml = ''
          for (let i = 1; i <=5; i++) {
            if (i <= reviewInfo.rating) {
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

genereteReview(reviews[0])

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